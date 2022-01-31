const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");
const fileManagement = require("./file.management");

describe.skip("File Management", () => {
  afterEach(() => {
    sinon.restore();
  });

  describe("When creating a new file", () => {
    it("Should call writeFileSync", () => {
      const writeFake = sinon.fake(fs.writeFileSync);
      sinon.replace(fs, 'writeFileSync', writeFake);

      const fileManagement = proxyquire('./file.management', { fs });
      fileManagement.createFile("test.txt");
      expect(writeFake.calledWith("./data/test.txt")).to.be.true;
    });

    it("Should throw an exception if a file already exists", () => {
      const writeFake = sinon.fake.throws(new Error());
      sinon.replace(fs, 'writeFileSync', writeFake);
      const fileManagement = proxyquire('./file.management', {fs});
  
      expect(() => fileManagement.createFile('test.txt')).to.throws();
    });

    it("getAllFiles should return a list of files", () => {
      const readFake = sinon.fake.yields(null, ['test.txt']);
      // readFake.yields(null, ['test.txt']); // since fake is immutable yield cannot me added to return later on
      sinon.replace(fs, 'readdir', readFake);
      const fileManagement = proxyquire('./file.management', { fs });
      
      fileManagement.getAllFiles((err, data) => {
        expect(data).to.eql(['test.txt'])
      })
    });
  });
});
