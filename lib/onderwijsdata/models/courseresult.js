/**
 * Courseresult model
 * @param {Object} config
 */
Surfnet.OnderwijsData.prototype.CourseResultClient = function(config) {
    this.config = config;
    this.modelUrl = "courseresults";
    
    this.getByOwner = function(url, params, callback) {
        var url = url +  "/" + this.modelUrl;
        this.get(url, params, callback);
    }

    this.getByPersonId = function(id, params, callback) {
        var url = this.config.endpoint + "persons/" + id + "/" + this.modelUrl;
        this.get(url, params, callback)
    }
};
Surfnet.OnderwijsData.Tools.extend(Surfnet.OnderwijsData.prototype.CourseResultClient, Surfnet.OnderwijsData.APIClient);
