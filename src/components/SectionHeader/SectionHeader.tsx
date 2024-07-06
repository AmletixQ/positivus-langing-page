import { FC, PropsWithChildren } from "react";
import "./SectionHeader.scss";

interface SectionHeaderProps {
  className?: string;
}

const SectionHeader: FC<SectionHeaderProps & PropsWithChildren> = ({
  className,
  children,
}) => {
  return <div className={"section-header " + className}>{children}</div>;
};

export default SectionHeader;
