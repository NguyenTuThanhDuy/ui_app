import {
  LuArrowLeft,
  LuBell,
  LuMenu,
  LuMic,
  LuSearch,
  LuUpload,
  LuUser,
} from "react-icons/lu";
import logo from "../../assets/logo.png";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../../contexts/SidebarContext";

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <LuArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button
            className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0"
            data-testid="header-button-search"
          >
            <LuSearch />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <LuMic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <LuSearch />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <LuMic />
        </Button>
        <Button size="icon" variant="ghost">
          <LuUpload />
        </Button>
        <Button size="icon" variant="ghost">
          <LuBell />
        </Button>
        <Button size="icon" variant="ghost">
          <LuUser />
        </Button>
      </div>
    </div>
  );
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <LuMenu />
      </Button>
      <a href="/">
        <img src={logo} className="h-6" />
      </a>
    </div>
  );
}
