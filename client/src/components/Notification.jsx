import React, { useState } from "react";

const Notification = (message,delay,h) => {
    const [displayNotification,setDisplayNotification] = useState(false);

    if(displayNotification){
        setTimeout(() => {
            setDisplayNotification(false);
        },{delay})
    }

  return (
    <div className={`absolute border max-w-[400px] w-full ${!displayNotification && "hidden"}`}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
