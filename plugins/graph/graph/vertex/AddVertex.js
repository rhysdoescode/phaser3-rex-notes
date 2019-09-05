import GetGraphItem from '../../graphitem/GetGraphItem.js';

var AddVertex = function (gameObejct) {
    if (this.isVertex(gameObejct)) {
        return this;
    }

    this.getVertexData(gameObejct, true);
    GetGraphItem(gameObejct).setGraph(this);
    return this;
};

export default AddVertex;