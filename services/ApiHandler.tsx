// import axiosInstance from "./instance";
// import AppError from "../utils/appError";

// export const getServiceBySlug = async (slug: string) => {
//   try {
//     const { data } = await axiosInstance.get(`/services/${slug}`);

//     return data.data;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new AppError(error.message, 500);
//     } else {
//       throw new AppError("Field to fetch home", 500);
//     }
//   }
// };
// export const getHomeData = async () => {
//   try {
//     const { data } = await axiosInstance.get("/home");

//     return data.data;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new AppError(error.message, 500);
//     } else {
//       throw new AppError("Field to fetch home", 500);
//     }
//   }
// };
// export const getAboutData = async () => {
//   try {
//     const { data } = await axiosInstance.get("/about");

//     return data.data;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new AppError(error.message, 500);
//     } else {
//       throw new AppError("Field to fetch home", 500);
//     }
//   }
// };
// export const getSettingsData = async () => {
//   try {
//     const { data } = await axiosInstance.get("/settings");

//     return data.data;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new AppError(error.message, 500);
//     } else {
//       throw new AppError("Field to fetch home", 500);
//     }
//   }
// };

// // export const getCategoriesData = async () => {
// //   try {
// //     const { data } = await axiosInstance.get("/categories");
// //     return data?.data || [];
// //   } catch {
// //     throw new CustomError("Failed to fetch Categories data", 500, "APIError");

// //   }
// // };

// // export const getShareData = async () => {
// //   return await axiosInstance.get("/relations");
// // };

// // export const getSettingsData = async () => {
// //   return await axiosInstance.get("/settings");
// // };

// // export const getTermsData = async () => {
// //   return await axiosInstance.get(`/term`);
// // };

// // export const getPrivacyData = async () => {
// //   return await axiosInstance.get(`/policy`);
// // };
import axiosInstance from "./instance";
import AppError from "../utils/appError";

export const getServiceBySlug = async (slug: string) => {
  try {
    const { data } = await axiosInstance.get(`/services/${slug}`);

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    } else {
      throw new AppError("Field to fetch home", 500);
    }
  }
};
export const getHomeData = async () => {
  try {
    const { data } = await axiosInstance.get("/home");

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    } else {
      throw new AppError("Field to fetch home", 500);
    }
  }
};
export const getAboutData = async () => {
  try {
    const { data } = await axiosInstance.get("/about");

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    } else {
      throw new AppError("Field to fetch home", 500);
    }
  }
};
export const getSettingsData = async () => {
  try {
    const { data } = await axiosInstance.get("/settings");

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    } else {
      throw new AppError("Field to fetch home", 500);
    }
  }
};

// export const getCategoriesData = async () => {
//   try {
//     const { data } = await axiosInstance.get("/categories");
//     return data?.data || [];
//   } catch {
//     throw new CustomError("Failed to fetch Categories data", 500, "APIError");

//   }
// };

// export const getShareData = async () => {
//   return await axiosInstance.get("/relations");
// };

// export const getSettingsData = async () => {
//   return await axiosInstance.get("/settings");
// };

// export const getTermsData = async () => {
//   return await axiosInstance.get(`/term`);
// };

// export const getPrivacyData = async () => {
//   return await axiosInstance.get(`/policy`);
// };

export const getWhyUsData = async () => {
  try {
    const res = await axiosInstance.get("/why-us");
    console.log("getWhyUsData:", res);
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    } else {
      throw new AppError("Field to fetch why-us", 500);
    }
  }
};
export const getOurServicesData = async () => {
  try {
    const res = await axiosInstance.get("/our-services");
    console.log("our-services data:", res);
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    } else {
      throw new AppError("Field to fetch our-services", 500);
    }
  }
};
export const getFAQData = async () => {
  try {
    const res = await axiosInstance.get("/faq");
    console.log("our-services data:", res);
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    } else {
      throw new AppError("Field to fetch our-services", 500);
    }
  }
};
export const getAllData = async () => {
  try {
    const res = await axiosInstance.get("");
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 500);
    } else {
      throw new AppError("Field to fetch our-services", 500);
    }
  }
};
