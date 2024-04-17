import { toast } from "react-toastify";

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
    const result =await resp.json();
    // if (result.success) {
    //   toast.success(result.message);
    // } else {
    //   toast.error(result.error);
    // }
    return result;
  } catch (error) {
    toast.error(error.error);
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
      headers: {
        "Content-Type": header,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(bodyData),
    });
    if (!resp.ok) {
      throw new Error("There is some error on fetchPost data");
    }
    const result = await resp.json();
    if (result.success) {
      toast.success(result.message,{autoClose:1000});
    } else {
      toast.error(result.error,{autoClose:1000});
    }
    return result;
  } catch (error) {
    console.log(error);
    toast.error(error.error);
  }
};

export const useDeleteFetch = async (url, id) => {
  try {
    const resp = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await resp.json();
    if (result.success) {
      toast.success(result.message,{autoClose:1000});
    } else {
      toast.error(result.error,{autoClose:1000});
    }
    return result;
  } catch (error) {
    toast.error(error.error,{autoClose:1000});
  }
};
