import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext();

const APIProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const server = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const getConfig = () => ({
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });

  // Social app API INTEGRATION FROM HERE.........!!!!!!!!!!!!!
  // company/addcompany

  // Social SignUP FIRST API........
  const businessInfoApi = async (data) => {
    // console.log("server", server)
    const response = await axios.post(
      `${server}/company/addcompany`,
      data,
      getConfig()
    );
    return response.data;
  };

  // admin/AdminRegister
  const adminInfoApi = async (adminData) => {
    // Assuming adminData contains all the necessary information (including the password)
    const response = await axios.post(
      `${server}/admin/AdminRegister`,
      adminData,
      getConfig()
    );
    return response.data;
  };

  const Login = async (data) => {
    const response = await axios.post(`${server}/login`, data);
    setUser(response.data.data);
    return response.data;
  };
  const AddUserOrModerator = async (data) => {
    const response = await axios.post(
      `${server}/user/addUser`,
      data,
      getConfig()
    );
    return response.data;
  };
  const AddPost = async (data) => {
    const response = await axios.post(
      `${server}/addpost/upload`,
      data,
      getConfig()
    );
    return response.data;
  };
  const GetPost = async (id) => {
    const response = await axios.get(
      `${server}/user/getAllproduct/${id}`,
      getConfig()
    );
    return response.data;
  };

  const DeletePost = async (id) => {
    const response = await axios.delete(
      `${server}/user/DeletePost/${id}`,
      getConfig()
    );
    return response.data;
  };

  // admin/GetAllModerator
  // creating team so selecting moderator to assign it
  const getAllModerator = async () => {
    const response = await axios.get(
      `${server}/admin/GetAllModerator`,
      getConfig()
    );
    return response.data;
  };

  // http://localhost:8000/team/create

  const createTeam = async (data) => {
    const response = await axios.post(
      `${server}/team/create`,
      data,
      getConfig()
    );
    return response.data;
  };

  // creating user for the moderator....!!!
  // http://localhost:8000/team/createuser

  const createUser = async (data) => {
    const response = await axios.post( `${server}/team/createuser`, data, getConfig()
    );
    return response.data;
  };

  // http://localhost:8000/admin/getTeam // Moderator team names passing through api's

  const ModeratorTeam = async () => {
    const response = await axios.get(`${server}/admin/getTeam`, getConfig());
    return response.data;
  };

  // http://localhost:8000/admin/getusers/null
  const moderatorTeamSelection = async (id) => {
    console.log("moderator id", id)
    const response = await axios.get(`${server}/admin/getusers/${id}`,getConfig());
    return response.data;
  };

  const GetModeratorTeam = async  (id) =>{
    const response = await axios.get(`${server}/admin/getusers/${id}`, getConfig());
    return response.data;
  }

  const provider = {
    // Social App Business info Api
    businessInfoApi,
    adminInfoApi,
    Login,
    AddUserOrModerator,
    getAllModerator,
    createTeam,
    createUser,
    ModeratorTeam,
    moderatorTeamSelection,
    GetModeratorTeam,
    user,

    //End Social App Business info Api
    AddPost,
    GetPost,
    DeletePost,
    getConfig,
  };

  return <APIContext.Provider value={provider}>{children}</APIContext.Provider>;
};

const useAPI = () => useContext(APIContext);

export { APIProvider, useAPI };
