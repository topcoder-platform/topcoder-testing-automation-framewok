"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = require("../../config-dev.json");
exports.ConfigHelper = {
    /**
     * Get current config
     */
    getConfig: function () {
        return config;
    },
    /**
     * Get login URL
     */
    getLoginURL: function () {
        return this.getConfig().loginUrl;
    },
    /**
     * Get homepage URL
     */
    getHomePageURL: function () {
        return this.getConfig().homePageUrl;
    },
    /**
     * Get logout URL
     */
    getLogoutURL: function () {
        return this.getConfig().logoutUrl;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb25maWctaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQWdEO0FBRW5DLFFBQUEsWUFBWSxHQUFHO0lBQzFCOztPQUVHO0lBQ0gsU0FBUztRQUNQLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7Q0FDRixDQUFDIn0=