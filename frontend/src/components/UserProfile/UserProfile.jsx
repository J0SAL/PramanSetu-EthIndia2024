import "./UserProfile.css";
import BalanceCard from "./BalanceCard";
import DataTiles from "./DataTiles";

const UserProfile = ({ web3, accounts, contract, balance }) => {
  const data = [
    {
      vote: {
        urlhash: "ethindia.co",
        userVote: 1,
        sender: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
        stakeamt: 4,
      },
      info: {
        url: "https://ethindia2024.devfolio.co/schedule",
        urlhash: "ethindia.co",
        data: "some info about ethindia schedule",
        sender: "0xjdh82u581271e230360230F9337D5c0430Bf44C0",
        positivecnts: 4,
        negativecnts: 3,
        threshold: 10,
      },
    },
    {
      vote: {
        urlhash: "ethindia.co",
        userVote: 1,
        sender: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
        stakeamt: 4,
      },
      info: {
        url: "https://ethindia2024.devfolio.co/schedule",
        urlhash: "ethindia.co",
        data: "some info about ethindia schedule",
        sender: "0xjdh82u581271e230360230F9337D5c0430Bf44C0",
        positivecnts: 10,
        negativecnts: 3,
        threshold: 10,
      },
    },
    {
      vote: {
        urlhash: "ethindia.co",
        userVote: 1,
        sender: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
        stakeamt: 4,
      },
      info: {
        url: "https://ethindia2024.devfolio.co/schedule",
        urlhash: "ethindia.co",
        data: "some info about ethindia schedule",
        sender: "0xjdh82u581271e230360230F9337D5c0430Bf44C0",
        positivecnts: 10,
        negativecnts: 30,
        threshold: 10,
      },
    },
    {
      vote: {
        urlhash: "ethindia.co",
        userVote: 1,
        sender: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
        stakeamt: 4,
      },
      info: {
        url: "https://ethindia2024.devfolio.co/schedule",
        urlhash: "ethindia.co",
        data: "some info about ethindia schedule",
        sender: "0xjdh82u581271e230360230F9337D5c0430Bf44C0",
        positivecnts: 4,
        negativecnts: 3,
        threshold: 10,
      },
    },
    {
      vote: {
        urlhash: "ethindia.co",
        userVote: 1,
        sender: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
        stakeamt: 4,
      },
      info: {
        url: "https://ethindia2024.devfolio.co/schedule",
        urlhash: "ethindia.co",
        data: "some info about ethindia schedule",
        sender: "0xjdh82u581271e230360230F9337D5c0430Bf44C0",
        positivecnts: 10,
        negativecnts: 3,
        threshold: 10,
      },
    },
    {
      vote: {
        urlhash: "ethindia.co",
        userVote: 1,
        sender: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
        stakeamt: 4,
      },
      info: {
        url: "https://ethindia2024.devfolio.co/schedule",
        urlhash: "ethindia.co",
        data: "some info about ethindia schedule",
        sender: "0xjdh82u581271e230360230F9337D5c0430Bf44C0",
        positivecnts: 10,
        negativecnts: 30,
        threshold: 10,
      },
    },
  ];

  return (
    <div className="user_profile_container">
      <div className="user_generic">
        <BalanceCard userName={accounts[0]} balance={balance} />
        <img
          className="user_profile_pic"
          src="default_profile.png"
          alt="User Profile"
        />
      </div>
      <div className="user_data_tile">
        <DataTiles data={data} />
      </div>
    </div>
  );
};

export default UserProfile;
