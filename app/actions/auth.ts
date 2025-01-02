"use server";
import { config } from "@/config";
import axios from "axios";

export interface LoginResponse {
  success: boolean;
  data: {
    account_exists: boolean;
    test_phone: boolean;
  };
  message: string;
}

export const login = async (phone: string) => {
  try {
    const res = await axios.post(`${config.api}/${config.api_v}/auth/login`, {
      phone: "+91" + phone,
    });
    return res.data as LoginResponse;
  } catch {
    return { message: "Invalid Credentials", type: "error" };
  }
};

export interface VerifyOTPResponse {
  success: boolean;
  data: {
    account_exists: boolean;
    token: string;
  };
  message: string;
}

export const verifyOTP = async (phone: string, otp: string) => {
  try {
    const res = await axios.post(
      `${config.api}/${config.api_v}/auth/verify_otp`,
      {
        phone,
        otp,
      },
    );
    return res.data as VerifyOTPResponse;
  } catch {
    return { message: "Invalid Credentials", type: "error" };
  }
};

export interface RegisterBody {
  email: string;
  address: string;
  name: string;
  profile_image: string;
  age: number;
  location: string;
}

export interface RegisterResponse {
  success: boolean;
  data: {
    token: string;
  };
  message: string;
}

export const register = async (body: RegisterBody) => {
  try {
    const res = await axios.post(
      `${config.api}/${config.api_v}/auth/register`,
      body,
    );
    return res.data as RegisterResponse;
  } catch {
    return { message: "Invalid Credentials", type: "error" };
  }
};
