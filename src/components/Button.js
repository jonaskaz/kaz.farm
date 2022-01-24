function Button({ className, href, text, size, type, icon }) {
  return (
    <div class="aws-btn-wrapper">
      <button className={className} href={href} type={type} size={size}>
          <div>{icon}</div>
      </button>
    </div>
  );
}

export default Button;
