// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IUserManagement {
    enum Role { None, Customer, Pharmacy, Doctor }

    function getRole(address _user) external view returns (Role);
    function isDoctorVerified(address _doctor) external view returns (bool);
}
