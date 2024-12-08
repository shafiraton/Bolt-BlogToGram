export interface SignUpFormData {
  fullName: string;
  email: string;
  mobileNumber: string;
}

export interface SignInFormData {
  mobileNumber: string;
}

export interface VerifyOTPFormData {
  otp: string;
}