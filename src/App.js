import React from "react";
import {
  StreamApp,
  NotificationDropdown,
  FlatFeed,
  Activity,
  LikeButton,
} from "react-activity-feed";
import "react-activity-feed/dist/index.css";

class App extends React.Component {
  render() {
    return (
      <StreamApp
        apiKey="dz5f4d5kzrue"
        appId="102254"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYnJvYWQtYm9udXMtMCIsImV4cCI6MTYyOTMzMDA1MX0.f9ZtqBz0t6A8VMykxWj3q25PFySxLA3LVbnNmF-rdAA"
      >
        <NotificationDropdown notify />
        <FlatFeed
          notify
          Activity={(props) => (
            <Activity
              {...props}
              Footer={() => (
                <div style={{ padding: "8px 16px" }}>
                  <LikeButton {...props} />
                </div>
              )}
            />
          )}
        />
      </StreamApp>
    );
  }
}

export default App;
