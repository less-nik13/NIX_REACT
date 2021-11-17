import React from "react";
import ContentLoader from "react-content-loader";

const UserProfileLoader = (props) => (
    <ContentLoader
        speed={0.5}
        width={400}
        height={150}
        viewBox="0 0 400 150"
        backgroundColor="#a1a1a1"
        foregroundColor="#c2c2c2"
        {...props}
    >
        <rect x="2" y="375" rx="5" ry="5" width="66" height="37"/>
        <rect x="156" y="375" rx="5" ry="5" width="121" height="37"/>
        <circle cx="62" cy="92" r="52"/>
        <rect x="130" y="40" rx="0" ry="0" width="200" height="22"/>
        <rect x="130" y="75" rx="0" ry="0" width="100" height="22"/>
        <rect x="130" y="111" rx="0" ry="0" width="200" height="22"/>
    </ContentLoader>
);

export default UserProfileLoader;