import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px;
  padding-top: 20px;

  width: 350px;
  height: auto;

  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgb(78, 74, 74);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  display: block;
  width: 50%;
  height: auto;
`;

export const Name = styled.p`
  font-size: 24px;
  color: black;
  margin: 0 0 10px 0;
`;

export const UserInfo = styled.p`
  font-size: 22px;
  color: gray;
  margin: 0 0 10px 0;
`;

export const StatsWrapper = styled.ul`
  /* display: flex;
  min-width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0; */

  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  /* height: 50%; */
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;

  list-style: none;

  width: calc(100% / 3);
  height: auto;
  padding: 10px;
  border: 1px solid rgb(78, 74, 74);
  background-color: rgb(193, 193, 193);
`;

export const Label = styled.span`
  color: gray;
  font-size: 18px;
`;

export const Quantity = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
