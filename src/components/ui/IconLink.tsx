
type IconLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
  className?: string;
};

export default function IconLink({ href, icon, label, external = false, className = '' }: IconLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      className={`icon-link ${className}`}
      aria-label={label}
    >
      {icon}
    </a>
  );
}