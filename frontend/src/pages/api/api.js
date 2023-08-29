import axios from "axios";

export async function fetchPhones() {
  console.log("fetchPhones function called")
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/phones/");
    return response.data;
  } catch (error) {
    console.error("Error fetching phones:", error);
    return [];
  }
}

export async function fetchPhoneBySlug(slug) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/phones/${slug}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching phone by slug:", error);
        return null;
    }
}

export async function fetchSimilarSpecs(id1, id2) {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/phones/compare/${id1},${id2}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching similar specs: ", error);
    return null;
  }
}

export async function fetchAllBrands() {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/brands/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all brands:", error);
    return [];
  }
}

export async function fetchPhonesByBrandName(brandName) {
  try {
    const allBrands = await fetchAllBrands();
    const brand = allBrands.find(b => b.name.toLowerCase() === brandName.toLowerCase());
    if (!brand) {
      console.error("Brand not found:", brandName);
      return [];
    }
    const response = await axios.get(`http://127.0.0.1:8000/api/brands/${brand.id}/phones/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching phones by brand:", error);
    return [];
  }
}