const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");
const fileManagement = require("./file.management");

describe("File Management Mock", () => {
  afterEach(() => {
    sinon.restore();
  });

  describe("When creating a new file", () => {
    it("Should call writeFileSync", () => {
      const writeMock = sinon.mock(fs);
      writeMock.expects('writeFileSync').once();

      const fileManagement = proxyquire('./file.management', { fs });
      fileManagement.createFile("test.txt");
      writeMock.verify();
    });
  });

  it("createFileSafe should create a file with a number appended", () => {
    const writeMock = sinon.mock(fs);
    writeMock.expects('writeFileSync').withArgs('./data/test.txt').throws();
    writeMock.expects('writeFileSync').withArgs('./data/test1.txt').once();
    writeMock.expects('readdirSync').once().returns(['test.txt']);

    const fileManagement = proxyquire('./file.management', {fs});

    fileManagement.createFileSafe("test.txt");

    writeMock.verify();
  });

  it("createFile should never call writeFileSync when the file is empty", () => {
    const writeMock = sinon.mock(fs);
    writeMock.expects('writeFileSync').never();

    const fileManagement = proxyquire('./file.management', {fs});
    try{
      fileManagement.createFileS("test.txt");
    } catch(err){

    }
    writeMock.verify();
  });
});
