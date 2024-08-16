import axios from 'axios';

const API_URL_USERS = 'http://localhost:8080/api/users';
const API_URL_PACKAGES = 'http://localhost:8080/api/menuItems';
const API_URL_ORDERS = 'http://localhost:8080/api/orderdetails';
const API_URL_CUSTOMORDERS='http://localhost:8080/api/customorders/add';

const API_URL_ADD_MENU_ITEM = 'http://localhost:8080/api/admin'; // Adjust the URL as needed

const addMenuItem = async (menuItem) => {
  try {
    const response = await axios.post(API_URL_ADD_MENU_ITEM, menuItem);
    return response.data;
  } catch (error) {
    console.error('Error adding menu item:', error.message || error);
    throw error;
  }
};
const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL_USERS);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message || error);
    throw error;
  }
};

const fetchPackages = async (packageMode) => {
  try {
    const response = await axios.get(`${API_URL_PACKAGES}/${packageMode}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching packages:', error.message || error);
    throw error;
  }
};

const signupUser = async (user) => {
  try {
    const response = await axios.post(API_URL_USERS, user);
    return response.data;
  } catch (error) {
    console.error('Error signing up user:', error.message || error);
    throw error;
  }
};

const placeOrder = async (orderDetails) => {
  try {
    const response = await axios.post(API_URL_ORDERS, orderDetails);
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error.message || error);
    throw error;
  }
};

const placeCustomOrder = async (details) => {
  try {
    const response = await axios.post(API_URL_CUSTOMORDERS, details);
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error.message || error);
    throw error;
  }
};

export default {
  fetchUsers,
  fetchPackages,
  signupUser,
  placeOrder,
  placeCustomOrder,
  addMenuItem 
};
