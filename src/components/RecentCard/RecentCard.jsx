import "./RecentCard.css";
import { ICONS } from "../../lib/constants";

const RecentCard = ({ type, data }) => {
  if (type === "developer") {
    const { name, role, experience, tags, avatar, status, activity } = data;
    return (
      <div className="recent-card developer-card">
        <div className="dev-left">
          <img src={avatar} alt={name} className="avatar-img" />
          <div className="dev-details">
            <div className="developer-name-row">
              <span className="card-title">{name}</span>
              <span className="exp-text">{experience}</span>
            </div>
            <p className="card-role">{role}</p>
            {tags && tags.length > 0 && (
              <div className="card-tags">
                {tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="dev-right">
          <span
            className={`status-pill ${status === "Active Now" ? "active" : "muted"}`}>
            {status}
          </span>
          <span className="activity-text">{activity}</span>
        </div>
      </div>
    );
  }

  if (type === "project") {
    const {
      name,
      version,
      description,
      status,
      lead,
      leadAvatar,
      commitsCount,
      branch,
    } = data;
    return (
      <div className="recent-card project-card">
        <div className="project-top-row">
          <div className="project-title-row">
            <span className="card-title">{name}</span>
            <span className="version-text">{version}</span>
          </div>
          <span
            className={`status-badge ${status.toLowerCase().replace(/\s+/g, "-")}`}>
            <span className="dot">•</span> {status}
          </span>
        </div>

        <p className="card-description">{description}</p>

        <div className="project-bottom-row">
          {lead && (
            <div className="project-lead">
              {leadAvatar && (
                <img src={leadAvatar} alt={lead} className="mini-avatar" />
              )}
              <span className="lead-name">{lead}</span>
            </div>
          )}
          <div className="project-meta">
            {commitsCount !== undefined && (
              <span className="meta-item">
                <img
                  src={ICONS.commit}
                  alt="commit"
                  className="icon-xs black-to-white"
                />
                {commitsCount}
              </span>
            )}
            {branch && (
              <span className="meta-item branch-name">
                <span className="branch-icon">&psi;</span> {branch}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default RecentCard;
