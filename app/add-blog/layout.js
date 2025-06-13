import LayoutAdmin from "@/components/layout/LayoutAdmin";

export default function AddBlogLayout({ children }) {
  return (
    <>
     <LayoutAdmin headerStyle={1} footerStyle={1}>
      {children}
     </LayoutAdmin>
    </>
  );
}
