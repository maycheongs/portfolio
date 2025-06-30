
export default function IconLink({ href, icon, label, external = false, className = '' }) {
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