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
