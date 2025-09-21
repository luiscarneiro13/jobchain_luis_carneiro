import axios from "axios"

// GET: Recibe query parameters y headers.
export async function getDB({ url, params = null, headers = null }) {
  try {
    return await axios.get(url, { params, headers });
  } catch (error) {
    throw error;
  }
}

// POST: Recibe body (data), query parameters y headers.
export async function postDB({ url, data = null, params = null, headers = null }) {
  try {
    return await axios.post(url, data, { params, headers });
  } catch (error) {
    throw error;
  }
}

// PUT: Recibe body (data), query parameters y headers.
export async function putDB({ url, data = null, params = null, headers = null }) {
  try {
    return await axios.put(url, data, { params, headers });
  } catch (error) {
    throw error;
  }
}

// PATCH: Recibe body (data), query parameters y headers.
export async function patchDB({ url, data = null, params = null, headers = null }) {
  try {
    return await axios.patch(url, data, { params, headers });
  } catch (error) {
    throw error;
  }
}

// DELETE: Recibe query parameters y headers.
export async function deleteDB({ url, params = null, headers = null }) {
  try {
    return await axios.delete(url, { params, headers });
  } catch (error) {
    throw error;
  }
}
