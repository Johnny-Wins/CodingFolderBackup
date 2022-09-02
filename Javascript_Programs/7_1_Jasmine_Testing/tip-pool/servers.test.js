describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
    allPayments = {};
  });

  
});

describe("test for the function to update the server table", function() {
  beforeEach(function() {
    serverId++;
    allServers['server' + "Bob"] = { serverName };
  });

  it("should add a new row to the table", function() {
    updateServerTable();

    expect(serverTbody.hasChildNodes()).toEqual(true);
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {}
  });
});