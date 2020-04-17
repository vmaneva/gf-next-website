import Header from "./Header";
interface BaseLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const BaseLayout = (props: BaseLayoutProps) => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default BaseLayout;
