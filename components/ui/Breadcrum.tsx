

type BreadCrumbProps = {
  title: string;
  subTitle?: string;
};

export function Breadcrumb({title, subTitle}: BreadCrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <div className=" max-w-[1024px] mx-auto">
         <h1 className="text-white text-xl md:text-2xl font-semibold whitespace-nowrap">
            <span className="text-primary">/</span>{title}
          </h1>
          <p className="text-gray-400">{subTitle}</p>

      </div>
    </nav>
  );
}
