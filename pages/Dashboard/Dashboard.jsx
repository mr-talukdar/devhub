import "./Dashboard.css";
import MetricCard from "../../src/components/MetricCard/MetricCard";
import RecentCard from "../../src/components/RecentCard/RecentCard";
import {
  DASHBOARD_METRICS,
  RECENT_DEVELOPERS,
  RECENT_PROJECTS,
  ICONS,
} from "../../src/lib/constants";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <div
            className="headline"
            style={{
              fontSize: "1.8rem",
              color: "var(--color-text)",
              fontWeight: "bold",
            }}>
            Dashboard
          </div>
          <div
            className="label"
            style={{
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
              marginTop: "4px",
            }}>
            Welcome back, Alex. Here is an overview of active developers,
            project health, and recent commits across the org.
          </div>
        </div>
        <div className="dashboard-actions">
          <span className="updated-time">
            <img
              src={ICONS.clock}
              alt="clock"
              className="icon-sm black-to-white"
            />
            Updated 4m ago
          </span>
          <button className="sync-btn">
            <img
              src={ICONS.sync}
              alt="sync"
              className="icon-sm black-to-white"
            />
            Sync
          </button>
        </div>
      </div>

      <div className="horizontal-line"></div>

      {/* Metric Cards Top Row */}
      <div className="stats">
        {DASHBOARD_METRICS.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      {/* Recents Split Columns */}
      <div className="recents">
        {/* Recent Developers Column */}
        <div className="recent-column">
          <div className="recent-column-header">
            <div className="recent-column-title">
              <img
                src={ICONS.developers}
                alt="developers"
                className="icon-sm black-to-white"
              />
              <span>Recent Developers</span>
            </div>
            <a href="/developers" className="view-all-link">
              View all (38) &rarr;
            </a>
          </div>
          <div className="recent-list">
            {RECENT_DEVELOPERS.map((dev) => (
              <RecentCard key={dev.id} data={dev} type="developer" />
            ))}
          </div>
        </div>

        {/* Recent Projects Column */}
        <div className="recent-column">
          <div className="recent-column-header">
            <div className="recent-column-title">
              <img
                src={ICONS.projects}
                alt="projects"
                className="icon-sm black-to-white"
              />
              <span>Recent Projects</span>
            </div>
            <div className="filter-btn">
              <span>Filter</span>
              <img
                src={ICONS.filter}
                alt="filter"
                className="icon-sm black-to-white"
              />
            </div>
          </div>
          <div className="recent-list">
            {RECENT_PROJECTS.map((proj) => (
              <RecentCard key={proj.id} data={proj} type="project" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
