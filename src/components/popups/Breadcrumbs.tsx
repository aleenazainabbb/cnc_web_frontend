"use client";

import LinkWithLoader from "@/components/Loader/Link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumb.module.css";

const capitalize = (s: string) => {
  return s
    .replace(/([a-z])([A-Z])/g, "$1 $2") // insert space before capital letters
    .replace(/-/g, " ") // replace dashes with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize each word
};



const AutoBreadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const crumbs = pathSegments.map((segment, i) => {
    const label = capitalize(segment);

    // Override for AllServices (redirect to /services)
    if (label.toLowerCase() === "allservices") {
      return { label: "AllServices", href: "/services" };
    }

    const href = "/" + pathSegments.slice(0, i + 1).join("/");
    return { label, href };
  });

  return (
    <div className={styles.main}>
      <nav className={styles.breadcrumb}>
        <span className={styles.crumb}>
          <LinkWithLoader href="/" className={styles.link}>
            Home
          </LinkWithLoader>
          {crumbs.length > 0 && <span className={styles.separator}>›</span>}
        </span>

        {crumbs.map((crumb, i) => (
          <span key={i} className={styles.crumb}>
            {i < crumbs.length - 1 ? (
              <>
                <LinkWithLoader href={crumb.href} className={styles.link}>
                  {crumb.label}
                </LinkWithLoader>
                <span className={styles.separator}>›</span>
              </>
            ) : (
              <span className={styles.current}>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
};

export default AutoBreadcrumb;
