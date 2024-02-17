export const useGetFetch = async (url) => {
  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error("There is some error on fetchGet data");
    }
    const data = resp.json();
    return data;
  } catch (error) {
    console.log("fetchGet Error: ", error.message);
  }
};

export const usePostFetch = async (url,bodyData) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
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
