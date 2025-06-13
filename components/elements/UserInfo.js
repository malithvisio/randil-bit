"use client";

import { useAuth } from "@/hooks/useAuth";

export default function UserInfo() {
  const { user, isLoading, logout } = useAuth();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="user-info-dashboard">
      <div className="user-info-header">
        <h4>User Information</h4>
      </div>
      <div className="user-info-content">
        <div className="user-avatar">
          {user?.image ? (
            <img src={user.image} alt={user.name} />
          ) : (
            <div className="avatar-placeholder">
              {user?.name?.charAt(0) || "U"}
            </div>
          )}
        </div>
        <div className="user-details">
          <h5>{user?.name}</h5>
          <p className="user-email">{user?.email}</p>
          {user?.phone && <p className="user-phone">{user.phone}</p>}
          <p className="user-role">
            Role: <span>{user?.role || "user"}</span>
          </p>
        </div>
      </div>
      <div className="user-actions">
        <button onClick={() => logout()} className="logout-btn">
          Sign Out
        </button>
      </div>

      <style jsx>{`
        .user-info-dashboard {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          margin-bottom: 30px;
        }

        .user-info-header {
          margin-bottom: 15px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }

        .user-info-header h4 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .user-info-content {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .user-avatar {
          margin-right: 20px;
        }

        .user-avatar img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
        }

        .avatar-placeholder {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          color: #888;
        }

        .user-details h5 {
          margin: 0 0 5px;
          font-size: 20px;
        }

        .user-details p {
          margin: 0 0 5px;
          color: #666;
        }

        .user-role span {
          font-weight: 600;
          text-transform: capitalize;
        }

        .user-actions {
          margin-top: 15px;
        }

        .logout-btn {
          background: #f44336;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s;
        }

        .logout-btn:hover {
          background: #d32f2f;
        }

        .loading {
          padding: 20px;
          text-align: center;
          color: #666;
        }
      `}</style>
    </div>
  );
}
