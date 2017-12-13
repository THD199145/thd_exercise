var BG = {
	id: 'uniqueId',
	refId: 'uniqueId', // from mongoDB
	createAt: Date,
	updatedAt: Date,
	measureAt: Date,
	vitalType: 'BG',
	isActive: 1, // 1 is true, 0 is false(logical delete)
	carePlanId: 'uniqueId',  // from SQL == enroleedProgramId
	status: 'registered', // string
	deviceMAC: 'E0E5CFA1DFF7', // from table Device
	range: 'null, 3, 4, null', // array to string
	severity: 'Low', //Missed, High, Low.....
	measureStatus: 'BEFOREMEAL', //.... or null
	value: 5.4, // float
	unit: 'mmol/L' // default
};

var HS = {
	id: 'uniqueId',
	refId: 'uniqueId', // from table observation of mongoDB
	createAt: Date,
	updatedAt: Date,
	measureAt: Date,
	vitalType: 'BW',
	isActive: 1, // 1 is true, 0 is false(logical delete)
	carePlanId: 'uniqueId',  // from SQL == enroleedProgramId
	status: 'registered', // string
	deviceMAC: 'E0E5CFA1DFF7', // from table Device
	range: 'null, -3, 4, null', // array to string
	severity: 'Low', //Missed, High, Low.....
	value: 87, // float
	unit: 'kg' // default
};

var BP = {
	id: 'uniqueId',
	refId: 'uniqueId', // from table observation of mongoDB
	createAt: Date,
	updatedAt: Date,
	measureAt: Date,
	vitalType: 'BP',
	isActive: 1, // 1 is true, 0 is false(logical delete)
	carePlanId: 'uniqueId',  // from SQL == enroleedProgramId
	hrReferenceId: 'uniqueId', // from mongodb observation
	status: 'registered', // string
	deviceMAC: 'E0E5CFA1DFF7', // from table Device
	systolicRange: 'null, 80, 120, null', // array to string
	diastolicRange: 'null, 60, 80, null', // array to string
	severity: 'Low', //Missed, High, Low.....
	systolicValue: 120, // int
	diastolicValue: 80, // int
	unit: 'mm[Hg]' // default
};

var PO = {
	id: 'uniqueId',
	refId: 'uniqueId', // from table observation of mongoDB
	createAt: Date,
	updatedAt: Date,
	measureAt: Date,
	vitalType: 'BP',
	isActive: 1, // 1 is true, 0 is false(logical delete)
	carePlanId: 'uniqueId',  // from SQL == enroleedProgramId
	hrReferenceId: 'uniqueId', // from mongodb observation
	status: 'registered', // string
	deviceMAC: 'E0E5CFA1DFF7', // from table Device
	range: 'null, 80, 99, null', // array to string
	severity: 'Low', //Missed, High, Low.....
	value: 120,
	unit: '%' // default
};

var HR = {
	id: 'uniqueId',
	refId: 'uniqueId', // from table observation of mongoDB
	createAt: Date,
	updatedAt: Date,
	measureAt: Date,
	vitalType: 'BP',
	isActive: 1, // 1 is true, 0 is false(logical delete)
	carePlanId: 'uniqueId',  // from SQL == enroleedProgramId
	memberMeasureReferenceId: 'uniqueId', // from mongodb observation PO or BP
	status: 'registered', // string
	deviceMAC: 'E0E5CFA1DFF7', // from table Device
	range: 'null, 50, 90, null', // array to string
	severity: 'Low', //Missed, High, Low.....
	value: 89,
	unit: 'beats/min' // default
};


