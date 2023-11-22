import { Link } from "react-router-dom";
import { useQueryClient, useQuery, useQueries } from "@tanstack/react-query";
import { getAllCategorys } from "../services/allCategorys";
import { getAllProductsByGender } from "../services/allGenderProducts";
import { capitalizeFirstLetter } from "../helpers/helpers";
import { Dropdown } from "antd";
export function GenderMenu() {
  const genders = {
    womens: "Women",
    mens: "Men",
    kids: "Kids",
  };

  const queryClient = useQueryClient();

  //1. hago mi query para todas las categorias
  const {
    isPending: isCategorysPending,
    isError: isCategorysError,
    data: categorys,
    error,
  } = useQuery({
    queryKey: ["categorys"],
    queryFn: async () => {
      return await getAllCategorys();
    },
  });

  //2. query para todos los grupos

  const groups = useQueries({
    queries: Object.entries(genders).map(([key]) => {
      return {
        queryKey: ["groups", key],
        queryFn: async () => {
          try {
            return await getAllProductsByGender(key);
          } catch (error) {
            console.error(`Error fetching data for gender ${key}:`, error);
            throw error; // Lanzar la excepción para que sea manejada por useQueries
          }
        },
      };
    }),
  });
  // Verifica si todas las consultas se han resuelto
  const allQueriesResolved = groups.every((query) => query.isSuccess);

  if (!allQueriesResolved) {
    return <p>Algunas consultas están pendientes o han fallado...</p>;
  }

  const groupsData = groups?.map((gender) => {
    const genderData = gender?.data;
    const { groupsByCategory } = genderData;
    return groupsByCategory.map((g) => {
      const { groups, category } = g;

      return { groups, category };
    });
  });

  groupsData?.[0].push("womens");
  groupsData?.[1].push("mens");
  groupsData?.[2].push("kids");

  if (isCategorysPending) {
    return <span>Loading...</span>;
  }

  if (isCategorysError) {
    return <span>Error: {error.message}</span>;
  }

  

  return (
    <div className="gender-menu-container">
      <ul className="gender-menu">
        {Object.entries(genders).map(([key, value]) => {
          return (
            <li key={key}>
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "1",
                      label: (
                        <div className="dropdown-menu-item-container">
                          {categorys?.map((categoryItem) => {
                            let category = categoryItem;
                            const filteredResult = groupsData.filter((item) =>
                              item.includes(key)
                            );
                            return (
                              <div
                                key={categoryItem}
                                className="dropdown-menu-item-container"
                              >
                                <Link
                                  className="dropdown-menu-category"
                                  to={`${key}/${categoryItem}`}
                                >
                                  {capitalizeFirstLetter(categoryItem)}
                                </Link>
                                <div className="dropdown-menu-group-container" key={`${key}/${categoryItem}`}>
                                  {filteredResult[0]
                                    .filter(
                                      (group) => group.category === categoryItem
                                    )
                                    .map((filteredGroup) => (
                                      <div key={`${key}/${categoryItem}`}>
                                        {filteredGroup.groups.map(
                                          (groupElement) => (
                                            <div
                                              key={`${groupElement}`}
                                            >
                                              <Link
                                                className="dropdown-menu-group"
                                                to={`${key}/${categoryItem}/${groupElement}`}
                                              >
                                                {capitalizeFirstLetter(
                                                  groupElement
                                                )}
                                              </Link>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ),
                    },
                  ],
                }}
                placement="bottom"
                className="dropdown-menu"
              >
                <Link to={`/${key}`} className="gender-menu-item">
                  {value}
                </Link>
              </Dropdown>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
