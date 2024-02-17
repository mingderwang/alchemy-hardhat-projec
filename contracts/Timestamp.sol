// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.7;
    
contract Timestamp {
   uint public timestamp;
   function saveTimestamp() public {
      timestamp = block.timestamp;
   }
}
