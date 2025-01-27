   
export interface User {
  data: {
    privileges: Privilege[];
  };
}

export interface Privilege {
  role: string;
}

export function getUserPrivileges(): { 
  isStaff: boolean;
  isAdmin: boolean;   
  isManager: boolean;   
  isID: number;  

} {

   
  	// @ts-ignore  
	 const userString = JSON.parse(localStorage.getItem("press_mine"));
  const userInfo = userString ? userString : null;
  const privileges = userInfo || [];

  
 
 
 
 
const isManager = privileges?.roles === "Manager";
  const isAdmin = privileges?.roles === "Agency";
  const isStaff = privileges?.roles === "Staff";
  const isID = userString?.id  

  
  

  return { 
    isManager,
     isAdmin,  
    isStaff, 
    isID
  };
}

 
