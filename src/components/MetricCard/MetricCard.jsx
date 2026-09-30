import "./MetricCard.css";

const MetricCard = ({ metric }) => {
  const {
    title,
    value,
    badge,
    subtitle,
    progress,
    highlightText,
    statusText,
    icon,
  } = metric;

  return (
    <div className="metric-card">
      <div className="metric-header">
        <span className="metric-title">{title}</span>
        {icon && (
          <img src={icon} alt={title} className="metric-icon black-to-white" />
        )}
      </div>

      <div className="metric-body">
        <span className="metric-value">{value}</span>
        {badge && <span className="metric-badge">{badge}</span>}
      </div>

      <div className="metric-footer">
        <div className="metric-subtitle">
          {subtitle}
          {highlightText && (
            <span className="metric-highlight"> {highlightText}</span>
          )}
        </div>
        {progress && <span className="metric-status">{progress}</span>}
        {statusText && (
          <span
            className={`metric-status ${
              statusText === "Verified" || statusText === "Within target"
                ? "status-success"
                : ""
            }`}>
            {statusText}
          </span>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
