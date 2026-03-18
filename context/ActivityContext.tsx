import { createContext, useState } from 'react'

export const ActivityContext = createContext<any>(null);

export const ActivityProvider = ({ children }: any) => {
    const [totalActivity, setTotalActivity] = useState<any[]>([
        {id: 1, activityName: "Request for leave"},
        {id: 2, activityName: "Request for work from home"},
        {id: 3, activityName: "Half Day Leave"},
        {id: 4, activityName: "Sick Leave Request" },
        {id: 5, activityName: "Casual Leave Request" },
        {id: 6, activityName: "Permission for Late Entry" },
        {id: 7, activityName: "Early Exit Request" },
        {id: 8, activityName: "Work From Office Request" },
        {id: 9, activityName: "Comp Off Request" },
        {id: 10, activityName: "On Duty Request" },
        {id: 11, activityName: "Business Trip Request" },
        {id: 12, activityName: "Shift Change Request" },
        {id: 13, activityName: "Overtime Request" }
      ]);
    return(
        <ActivityContext.Provider value={{ totalActivity, setTotalActivity }}>
            {children}
        </ActivityContext.Provider>
    )
}