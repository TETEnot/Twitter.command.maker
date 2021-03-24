(function() {
    if ("Notification" in window) {
      var permission = Notification.permission;
  
      if (permission === "denied" || permission === "granted") {
        return;
      }
  
      Notification
        .requestPermission()
        .then(function() {
          var notification = new Notification("Hello, world!");
        });
    }
  })();
