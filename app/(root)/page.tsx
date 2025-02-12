import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Jean Marc",
    lastName: "Mufind",
    email: "makayamufind@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your account and transaction effectively"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1350.35}
          />
        </header>
        RECENT TRANSACTION
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.54 }, { currentBalance: 400.90 }]}
      />
    </section>
  );
};

export default Home;
