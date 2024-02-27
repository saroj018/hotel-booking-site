export const useGetFetch = async (url) => {
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!resp.ok) {
      throw new Error("There is some error on fetchGet data");
    }
    const data = resp.json();
    return data;
  } catch (error) {
    console.log("fetchGet Error: ", error.message);
  }
};

export const usePostFetch = async (
  url,
  bodyData,
  header = "application/json"
) => {
  console.log(bodyData);
  try {
    const resp = await fetch(url, {
      method: "POST",
      // credentials: "include",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": header,
      },
    });
    if (!resp.ok) {
      throw new Error("There is some error on fetchPost data");
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("fetchPost Error: ", error.message);
  }
};

export const useDeleteFetch = async (url,id) => {
  try {
    const resp = await fetch(url, {
      method: "DELETE",
      body:JSON.stringify({id}),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(resp);
    const result = await resp.json();
    return result;
  } catch (error) {
    console.log("fetchDelete Error: ", error.message);
  }
};
