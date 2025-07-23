// For Post Data
export interface PostData {
  id: number;
  title: string;
  content: string;
}

// For User Data
export interface UserData {
  id: number;
  name: string;
  email: string;
}

// Props for Button Component
export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: string;
  onClick?: () => void;
}

// Props for Layout Component
export interface LayoutProps {
  children: React.ReactNode;
}

// Props for Post Modal Component
export interface PostModalProps {
  onClose: () => void;
  onAddPost: (post: PostData) => void;
}

// Props for User Modal Component
export interface UserModalProps {
  onClose: () => void;
  onAddUser: (user: UserData) => void;
}

// Optional: Page route props (if needed in pages/index.tsx or navigation)
export interface PageRouteProps {
  route?: string;
}
// interfaces/index.ts

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  address: Address; 
}
export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export type ButtonSize = "small" | "medium" | "large";
export type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-lg";

export interface ButtonProps {
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}
export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
  className?: string;
}
