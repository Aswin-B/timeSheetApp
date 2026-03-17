import { createContext, useState } from 'react'

export const ActivityContext = createContext<any>(null);

export const ActivityProvider = ({ children }: any) => {
    const [totalActivity, setTotalActivity] = useState<any[]>([
        {id: 1, activityName: "Request for leave"},
        {id: 2, activityName: "Request for work from home"},
        {id: 3, activityName: "Half Day Leave"},
      ]);
    return(
        <ActivityContext.Provider value={{ totalActivity, setTotalActivity }}>
            {children}
        </ActivityContext.Provider>
    )
}