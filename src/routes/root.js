import { Header, SideNav } from "../components";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="App overflow-hidden">
      <main className="min-h-screen flex md:fixed h-screen lg:static surface-ground">
        {/* Left Side*/}
        <div
          className="surface-section h-screen lg:block flex-shrink-0 absolute lg:sticky z-2 select-none "
          style={{ width: "280px" }}
        >
          <SideNav />
        </div>

        {/* Right Side  */}
        <div className="w-full min-h-screen flex flex-column relative flex-auto bg-slate-100 ">
          <Header />

          <div className="md:p-5 flex flex-column flex-auto  overflow-y-scroll text-slate-600">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
