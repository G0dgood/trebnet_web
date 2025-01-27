import React, { createContext, useState } from 'react';

export const UserContext = createContext({ user: null, updateUser: () => { } });

// 2. Create a Provider Component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	// @ts-ignore 
	const [user, setUser] = useState(JSON?.parse(localStorage.getItem("press_mine")));

	const updateUser = (userData: any) => {
		setUser(userData);
	};

	return (
		// @ts-ignore  
		<UserContext.Provider value={{ user, updateUser }}>
			{children}
		</UserContext.Provider>
	);
};