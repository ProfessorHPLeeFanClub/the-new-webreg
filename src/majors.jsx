function BioSciPOS() {
	return (
		<table className="sc_courselist">
			<tbody>
				<tr className="odd">
					<td className="codecol">
						<a className="class">BIO&nbsp;SCI&nbsp;2A</a>
					</td>
					<td>Freshman Seminar </td>
				</tr>
				<tr className="odd orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a className="class">BIO&nbsp;SCI&nbsp;190</a>
					</td>
					<td colSpan="1"> Transfer Student Seminar</td>
				</tr>
				<tr className="even">
					<td colSpan="2">
						<span className="courselistcomment">Biological Sciences Core:</span>
					</td>
				</tr>
				<tr className="odd">
					<td className="codecol">
						<a className="class">BIO&nbsp;SCI&nbsp;93</a>
					</td>{" "}
					<td>From DNA to Organisms </td>{" "}
				</tr>{" "}
				<tr className="odd orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a className="class">BIO&nbsp;SCI&nbsp;H93</a>
					</td>{" "}
					<td colSpan="1"> Honors From DNA to Organisms</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a className="class">BIO&nbsp;SCI&nbsp;94</a>
					</td>{" "}
					<td>From Organisms to Ecosystems </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a className="class">BIO&nbsp;SCI&nbsp;97</a>
					</td>{" "}
					<td>Genetics </td>{" "}
				</tr>{" "}
				<tr className="odd orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a className="class">BIO&nbsp;SCI&nbsp;H97</a>
					</td>{" "}
					<td colSpan="1"> Honors Genetics</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a className="class">BIO&nbsp;SCI&nbsp;98</a>
					</td>{" "}
					<td>Biochemistry </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;99"
							className="class"
							onClick="return showCourse(this, 'BIO SCI 99');"
						>
							BIO&nbsp;SCI&nbsp;99
						</a>
					</td>{" "}
					<td>Molecular Biology </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;100"
							className="class"
							onClick="return showCourse(this, 'BIO SCI 100');"
						>
							BIO&nbsp;SCI&nbsp;100
						</a>
					</td>{" "}
					<td>Scientific Writing </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select one of the following General Chemistry sequences:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;1A"
								className="class"
								onClick="return showCourse(this, 'CHEM 1A');"
							>
								CHEM&nbsp;1A
							</a>
							-
							<a
								title="CHEM&nbsp;1B"
								className="class"
								onClick="return showCourse(this, 'CHEM 1B');"
							>
								{" "}
								1B
							</a>
							-
							<a
								title="CHEM&nbsp;1C"
								className="class"
								onClick="return showCourse(this, 'CHEM 1C');"
							>
								{" "}
								1C
							</a>
						</div>
					</td>{" "}
					<td>
						General Chemistry
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and General Chemistry
						</span>
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and General Chemistry{" "}
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment commentindent">
								and accompanying labs:
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;1LC"
								className="class"
								onClick="return showCourse(this, 'CHEM 1LC');"
							>
								CHEM&nbsp;1LC
							</a>
							-
							<a
								title="CHEM&nbsp;1LD"
								className="class"
								onClick="return showCourse(this, 'CHEM 1LD');"
							>
								{" "}
								1LD
							</a>
						</div>
					</td>{" "}
					<td>
						General Chemistry Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and General Chemistry Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment commentindent">or</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;H2A"
								className="class"
								onClick="return showCourse(this, 'CHEM H2A');"
							>
								CHEM&nbsp;H2A
							</a>
							-
							<a
								title="CHEM&nbsp;H2B"
								className="class"
								onClick="return showCourse(this, 'CHEM H2B');"
							>
								{" "}
								H2B
							</a>
							-
							<a
								title="CHEM&nbsp;H2C"
								className="class"
								onClick="return showCourse(this, 'CHEM H2C');"
							>
								{" "}
								H2C
							</a>
						</div>
					</td>{" "}
					<td>
						Honors General Chemistry
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Honors General Chemistry
						</span>
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Honors General Chemistry
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment commentindent">
								and accompanying labs:
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;H2LA"
								className="class"
								onClick="return showCourse(this, 'CHEM H2LA');"
							>
								CHEM&nbsp;H2LA
							</a>
							-
							<a
								title="CHEM&nbsp;H2LB"
								className="class"
								onClick="return showCourse(this, 'CHEM H2LB');"
							>
								{" "}
								H2LB
							</a>
						</div>
					</td>{" "}
					<td>
						Honors General Chemistry Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Honors General Chemistry Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select one of the following Organic Chemistry sequences:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;51A"
								className="class"
								onClick="return showCourse(this, 'CHEM 51A');"
							>
								CHEM&nbsp;51A
							</a>
							-
							<a
								title="CHEM&nbsp;51B"
								className="class"
								onClick="return showCourse(this, 'CHEM 51B');"
							>
								{" "}
								51B
							</a>
							-
							<a
								title="CHEM&nbsp;51C"
								className="class"
								onClick="return showCourse(this, 'CHEM 51C');"
							>
								{" "}
								51C
							</a>
						</div>
					</td>{" "}
					<td>
						Organic Chemistry
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Organic Chemistry
						</span>
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Organic Chemistry
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment commentindent">
								and accompanying labs:
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;51LB"
								className="class"
								onClick="return showCourse(this, 'CHEM 51LB');"
							>
								CHEM&nbsp;51LB
							</a>
							-
							<a
								title="CHEM&nbsp;51LC"
								className="class"
								onClick="return showCourse(this, 'CHEM 51LC');"
							>
								{" "}
								51LC
							</a>
						</div>
					</td>{" "}
					<td>
						Organic Chemistry Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Organic Chemistry Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;H52LA"
								className="class"
								onClick="return showCourse(this, 'CHEM H52LA');"
							>
								CHEM&nbsp;H52LA
							</a>
							-
							<a
								title="CHEM&nbsp;H52LB"
								className="class"
								onClick="return showCourse(this, 'CHEM H52LB');"
							>
								{" "}
								H52LB
							</a>
						</div>
					</td>{" "}
					<td>
						Honors Organic Chemistry Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Honors Organic Chemistry Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">Complete:</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;5A"
							className="class"
							onClick="return showCourse(this, 'MATH 5A');"
						>
							MATH&nbsp;5A
						</a>
					</td>{" "}
					<td>Calculus for Life Sciences I </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;5B"
							className="class"
							onClick="return showCourse(this, 'MATH 5B');"
						>
							MATH&nbsp;5B
						</a>
					</td>{" "}
					<td>Calculus for Life Sciences II </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select one of the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="STATS&nbsp;7"
								className="class"
								onClick="return showCourse(this, 'STATS 7');"
							>
								STATS&nbsp;7
							</a>
						</div>
					</td>{" "}
					<td>Basic Statistics </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="STATS&nbsp;8"
								className="class"
								onClick="return showCourse(this, 'STATS 8');"
							>
								STATS&nbsp;8
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Biological Statistics </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="MATH&nbsp;2D"
								className="class"
								onClick="return showCourse(this, 'MATH 2D');"
							>
								MATH&nbsp;2D
							</a>
						</div>
					</td>{" "}
					<td>Multivariable Calculus I </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="MATH&nbsp;3A"
								className="class"
								onClick="return showCourse(this, 'MATH 3A');"
							>
								MATH&nbsp;3A
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Linear Algebra </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select one of the following Physics Series:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment areaheader commentindent">
								Series A
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="PHYSICS&nbsp;3A"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 3A');"
							>
								PHYSICS&nbsp;3A
							</a>
							-
							<a
								title="PHYSICS&nbsp;3B"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 3B');"
							>
								{" "}
								3B
							</a>
							-
							<a
								title="PHYSICS&nbsp;3C"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 3C');"
							>
								{" "}
								3C
							</a>
						</div>
					</td>{" "}
					<td>
						Basic Physics I<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Basic Physics II
						</span>
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Basic Physics III
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="PHYSICS&nbsp;3LB"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 3LB');"
							>
								PHYSICS&nbsp;3LB
							</a>
							-
							<a
								title="PHYSICS&nbsp;3LC"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 3LC');"
							>
								{" "}
								3LC
							</a>
						</div>
					</td>{" "}
					<td>
						Basic Physics Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Basic Physics Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment areaheader commentindent">
								Series B
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="PHYSICS&nbsp;7C"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7C');"
							>
								PHYSICS&nbsp;7C
							</a>
							-
							<a
								title="PHYSICS&nbsp;7D"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7D');"
							>
								{" "}
								7D
							</a>
							-
							<a
								title="PHYSICS&nbsp;7E"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7E');"
							>
								{" "}
								7E
							</a>
						</div>
					</td>{" "}
					<td>
						Classical Physics
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Classical Physics
						</span>
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Classical Physics
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="PHYSICS&nbsp;7LC"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7LC');"
							>
								PHYSICS&nbsp;7LC
							</a>
							-
							<a
								title="PHYSICS&nbsp;7LD"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7LD');"
							>
								{" "}
								7LD
							</a>
						</div>
					</td>{" "}
					<td>
						Classical Physics Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Classical Physics Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Prerequisites for all Biological Sciences Core courses are
							rigorously enforced. Students must have a 2.0 cumulative grade
							point average in the Biological Sciences Core Curriculum, four
							upper-division elective courses, and three upper-division
							laboratories.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Upper-Division Writing Requirement
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Students in the School of Biological Sciences have the option to
							satisfy the upper-division writing requirement by completing{" "}
							<a
								title="BIO&nbsp;SCI&nbsp;100"
								className="class"
								onClick="return showCourse(this, 'BIO SCI 100');"
							>
								BIO&nbsp;SCI&nbsp;100
							</a>{" "}
							with a minimum grade of C, followed by the completion of two
							upper-division laboratories selected from the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;D111L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI D111L');"
						>
							BIO&nbsp;SCI&nbsp;D111L
						</a>
					</td>{" "}
					<td>Developmental and Cell Biology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E106L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E106L');"
						>
							BIO&nbsp;SCI&nbsp;E106L
						</a>
					</td>{" "}
					<td>Habitats and Organisms </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E112L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E112L');"
						>
							BIO&nbsp;SCI&nbsp;E112L
						</a>
					</td>{" "}
					<td>Physiology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E115L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E115L');"
						>
							BIO&nbsp;SCI&nbsp;E115L
						</a>
					</td>{" "}
					<td>Evolution Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E131L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E131L');"
						>
							BIO&nbsp;SCI&nbsp;E131L
						</a>
					</td>{" "}
					<td>Image Analysis in Biological Research </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E140L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E140L');"
						>
							BIO&nbsp;SCI&nbsp;E140L
						</a>
					</td>{" "}
					<td>Evolution and the Environment Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E160L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E160L');"
						>
							BIO&nbsp;SCI&nbsp;E160L
						</a>
					</td>{" "}
					<td>Biology of Birds Lab </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E166L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E166L');"
						>
							BIO&nbsp;SCI&nbsp;E166L
						</a>
					</td>{" "}
					<td>Field Biology </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E179L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E179L');"
						>
							BIO&nbsp;SCI&nbsp;E179L
						</a>
					</td>{" "}
					<td>Field Freshwater Ecology </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E186L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E186L');"
						>
							BIO&nbsp;SCI&nbsp;E186L
						</a>
					</td>{" "}
					<td>Population and Community Ecology Lab </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;M114L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI M114L');"
						>
							BIO&nbsp;SCI&nbsp;M114L
						</a>
					</td>{" "}
					<td>Biochemistry Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;M116L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI M116L');"
						>
							BIO&nbsp;SCI&nbsp;M116L
						</a>
					</td>{" "}
					<td>Molecular Biology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;M118L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI M118L');"
						>
							BIO&nbsp;SCI&nbsp;M118L
						</a>
					</td>{" "}
					<td>Experimental Microbiology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;M121L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI M121L');"
						>
							BIO&nbsp;SCI&nbsp;M121L
						</a>
					</td>{" "}
					<td>Advanced Immunology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;N123L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI N123L');"
						>
							BIO&nbsp;SCI&nbsp;N123L
						</a>
					</td>{" "}
					<td>Human Neuroimaging Lab </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;M130L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI M130L');"
						>
							BIO&nbsp;SCI&nbsp;M130L
						</a>
					</td>{" "}
					<td>Advanced Molecular Lab Techniques </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;N113L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI N113L');"
						>
							BIO&nbsp;SCI&nbsp;N113L
						</a>
					</td>{" "}
					<td>Neurobiology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;N123L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI N123L');"
						>
							BIO&nbsp;SCI&nbsp;N123L
						</a>
					</td>{" "}
					<td>Human Neuroimaging Lab </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Students must earn a grade of C or better in each of the two
							laboratories selected. Completion of{" "}
							<a
								title="BIO&nbsp;SCI&nbsp;199W"
								className="class"
								onClick="return showCourse(this, 'BIO SCI 199W');"
							>
								BIO&nbsp;SCI&nbsp;199W
							</a>{" "}
							or Excellence in Research in Biological Sciences program may count
							as one of the two upper-division labs.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							School Residence Requirement
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even lastrow">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							After matriculation, all courses required for the major must be
							successfully completed at UCI. Students must be a major in the
							School of Biological Sciences for the 3 academic quarters
							(excluding summer session) immediately preceding degree
							certification.The School of Biological Sciences strictly enforces
							the UCI residence requirement. At least 36 of the final 45 units
							completed by a student for the bachelor’s degree must be earned in
							residence at the UCI campus. (The School considers courses taken
							in the UC Education Abroad Program to be in-residence courses.){" "}
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

function BioSciSample() {
	return (
		<table width="100%">
			<tbody>
				<tr className="odd">
					<td>
						<a className="class">BIO SCI 99</a>
					</td>
				</tr>
				<tr className="even">
					<td>
						<a className="class">CHEM 51C</a>- <a className="class">51LC</a>
					</td>
				</tr>
				<tr className="odd">
					<td>
						<a className="class">STATS 7</a>, <a className="class">8</a>,{" "}
						<a className="class">MATH 2D</a>, or{" "}
						<a className="class">MATH 3A</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

function BusinessPOS() {
	return (
		<table className="sc_courselist">
			<tbody>
				<tr className="even firstrow">
					<td colSpan="2">
						<span className="courselistcomment">A. Lower-Division:</span>
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					<td className="codecol">
						<a
							title="MATH&nbsp;2A"
							className="class"
							onClick="return showCourse(this, 'MATH 2A');"
						>
							MATH&nbsp;2A
						</a>
					</td>
					<td>Single-Variable Calculus I </td>
				</tr>
				<tr className="even">
					<td className="codecol">
						<a
							title="MATH&nbsp;2B"
							className="class"
							onClick="return showCourse(this, 'MATH 2B');"
						>
							MATH&nbsp;2B
						</a>
					</td>
					<td>Single-Variable Calculus II </td>
				</tr>
				<tr className="odd">
					<td className="codecol">
						<a
							title="MGMT&nbsp;1"
							className="class"
							onClick="return showCourse(this, 'MGMT 1');"
						>
							MGMT&nbsp;1
						</a>
					</td>
					<td>Introduction to Business and Management </td>
				</tr>
				<tr className="even">
					<td className="codecol">
						<a
							title="MGMT&nbsp;4A"
							className="class"
							onClick="return showCourse(this, 'MGMT 4A');"
						>
							MGMT&nbsp;4A
						</a>
					</td>
					<td>Basic Economics for Managers I </td>
				</tr>
				<tr className="even orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a
							title="ECON&nbsp;20A"
							className="class"
							onClick="return showCourse(this, 'ECON 20A');"
						>
							ECON&nbsp;20A
						</a>
					</td>{" "}
					<td colSpan="1"> Basic Economics I</td>
				</tr>{" "}
				<tr className="odd">
					<td className="codecol">
						<a
							title="MGMT&nbsp;4B"
							className="class"
							onClick="return showCourse(this, 'MGMT 4B');"
						>
							MGMT&nbsp;4B
						</a>
					</td>
					<td>Basic Economics for Managers II </td>{" "}
				</tr>{" "}
				<tr className="odd orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a
							title="ECON&nbsp;20B"
							className="class"
							onClick="return showCourse(this, 'ECON 20B');"
						>
							ECON&nbsp;20B
						</a>
					</td>{" "}
					<td colSpan="1"> Basic Economics II</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MGMT&nbsp;7"
							className="class"
							onClick="return showCourse(this, 'MGMT 7');"
						>
							MGMT&nbsp;7
						</a>
					</td>{" "}
					<td>Statistics for Business Decision Making </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MGMT&nbsp;30A"
							className="class"
							onClick="return showCourse(this, 'MGMT 30A');"
						>
							MGMT&nbsp;30A
						</a>
					</td>{" "}
					<td>Principles of Accounting I </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MGMT&nbsp;30B"
							className="class"
							onClick="return showCourse(this, 'MGMT 30B');"
						>
							MGMT&nbsp;30B
						</a>
					</td>{" "}
					<td>Principles of Accounting II </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							B. Upper-Division Core:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MGMT&nbsp;101"
							className="class"
							onClick="return showCourse(this, 'MGMT 101');"
						>
							MGMT&nbsp;101
						</a>
					</td>{" "}
					<td>Management Science </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MGMT&nbsp;102"
							className="class"
							onClick="return showCourse(this, 'MGMT 102');"
						>
							MGMT&nbsp;102
						</a>
					</td>{" "}
					<td>Managing Organizational Behavior </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MGMT&nbsp;105"
							className="class"
							onClick="return showCourse(this, 'MGMT 105');"
						>
							MGMT&nbsp;105
						</a>
					</td>{" "}
					<td>Introduction to Marketing </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MGMT&nbsp;107"
							className="class"
							onClick="return showCourse(this, 'MGMT 107');"
						>
							MGMT&nbsp;107
						</a>
					</td>{" "}
					<td>Introduction to Management Information Systems </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MGMT&nbsp;109"
							className="class"
							onClick="return showCourse(this, 'MGMT 109');"
						>
							MGMT&nbsp;109
						</a>
					</td>{" "}
					<td>Introduction to Managerial Finance </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MGMT&nbsp;110"
							className="class"
							onClick="return showCourse(this, 'MGMT 110');"
						>
							MGMT&nbsp;110
						</a>
					</td>{" "}
					<td>Strategic Management </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MGMT&nbsp;191W"
							className="class"
							onClick="return showCourse(this, 'MGMT 191W');"
						>
							MGMT&nbsp;191W
						</a>
					</td>{" "}
					<td>Business Communication </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							C. Business Electives: Select 5 upper-division Merage School
							electives numbered 111-196, to include completion of one of the
							defined emphases below:
						</span>{" "}
						<sup>1</sup>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Emphasis in Accounting:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;131A"
								className="class"
								onClick="return showCourse(this, 'MGMT 131A');"
							>
								MGMT&nbsp;131A
							</a>
						</div>
					</td>{" "}
					<td>Intermediate Accounting I </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							and select two of the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;131B"
								className="class"
								onClick="return showCourse(this, 'MGMT 131B');"
							>
								MGMT&nbsp;131B
							</a>
						</div>
					</td>{" "}
					<td>Intermediate Accounting II </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;131C"
								className="class"
								onClick="return showCourse(this, 'MGMT 131C');"
							>
								MGMT&nbsp;131C
							</a>
						</div>
					</td>{" "}
					<td>Intermediate Accounting III </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;132A"
								className="class"
								onClick="return showCourse(this, 'MGMT 132A');"
							>
								MGMT&nbsp;132A
							</a>
						</div>
					</td>{" "}
					<td>Individual Taxation </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;133"
								className="class"
								onClick="return showCourse(this, 'MGMT 133');"
							>
								MGMT&nbsp;133
							</a>
						</div>
					</td>{" "}
					<td>Corporate and Partnership Taxation </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;134"
								className="class"
								onClick="return showCourse(this, 'MGMT 134');"
							>
								MGMT&nbsp;134
							</a>
						</div>
					</td>{" "}
					<td>Data Analytics in Accounting </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;137"
								className="class"
								onClick="return showCourse(this, 'MGMT 137');"
							>
								MGMT&nbsp;137
							</a>
						</div>
					</td>{" "}
					<td>Advanced Accounting </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;138"
								className="class"
								onClick="return showCourse(this, 'MGMT 138');"
							>
								MGMT&nbsp;138
							</a>
						</div>
					</td>{" "}
					<td>Auditing </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;194"
								className="class"
								onClick="return showCourse(this, 'MGMT 194');"
							>
								MGMT&nbsp;194
							</a>
						</div>
					</td>{" "}
					<td>Financial Statement Analysis </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">Emphasis in Finance:</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;141"
								className="class"
								onClick="return showCourse(this, 'MGMT 141');"
							>
								MGMT&nbsp;141
							</a>
						</div>
					</td>{" "}
					<td>Investments </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								and select two of the following:
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;144"
								className="class"
								onClick="return showCourse(this, 'MGMT 144');"
							>
								MGMT&nbsp;144
							</a>
						</div>
					</td>{" "}
					<td>Multinational Finance </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;147"
								className="class"
								onClick="return showCourse(this, 'MGMT 147');"
							>
								MGMT&nbsp;147
							</a>
						</div>
					</td>{" "}
					<td>Applied Financial Valuation </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;149"
								className="class"
								onClick="return showCourse(this, 'MGMT 149');"
							>
								MGMT&nbsp;149
							</a>
						</div>
					</td>{" "}
					<td>Derivatives </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Emphasis in Information Systems:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select three of the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;171"
								className="class"
								onClick="return showCourse(this, 'MGMT 171');"
							>
								MGMT&nbsp;171
							</a>
						</div>
					</td>{" "}
					<td>Social Media </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;173"
								className="class"
								onClick="return showCourse(this, 'MGMT 173');"
							>
								MGMT&nbsp;173
							</a>
						</div>
					</td>{" "}
					<td>Business Intelligence for Analytical Decisions </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;174"
								className="class"
								onClick="return showCourse(this, 'MGMT 174');"
							>
								MGMT&nbsp;174
							</a>
						</div>
					</td>{" "}
					<td>Business Data Management </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;178"
								className="class"
								onClick="return showCourse(this, 'MGMT 178');"
							>
								MGMT&nbsp;178
							</a>
						</div>
					</td>{" "}
					<td>Management of Information Technology </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Emphasis in Marketing:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select three of the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;150"
								className="class"
								onClick="return showCourse(this, 'MGMT 150');"
							>
								MGMT&nbsp;150
							</a>
						</div>
					</td>{" "}
					<td>Consumer Behavior </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;151"
								className="class"
								onClick="return showCourse(this, 'MGMT 151');"
							>
								MGMT&nbsp;151
							</a>
						</div>
					</td>{" "}
					<td>Marketing Research </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;154"
								className="class"
								onClick="return showCourse(this, 'MGMT 154');"
							>
								MGMT&nbsp;154
							</a>
						</div>
					</td>{" "}
					<td>Global Marketing </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;155"
								className="class"
								onClick="return showCourse(this, 'MGMT 155');"
							>
								MGMT&nbsp;155
							</a>
						</div>
					</td>{" "}
					<td>Brand Management </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Emphasis in Operations and Decision Technologies:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;189"
								className="class"
								onClick="return showCourse(this, 'MGMT 189');"
							>
								MGMT&nbsp;189
							</a>
						</div>
					</td>{" "}
					<td>Operations Management </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							and complete the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;182"
								className="class"
								onClick="return showCourse(this, 'MGMT 182');"
							>
								MGMT&nbsp;182
							</a>
						</div>
					</td>{" "}
					<td>Supply Chain Management </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;196"
								className="class"
								onClick="return showCourse(this, 'MGMT 196');"
							>
								MGMT&nbsp;196
							</a>
						</div>
					</td>{" "}
					<td>Decision Analysis </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Emphasis in Organization and Management:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select three of the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;125"
								className="class"
								onClick="return showCourse(this, 'MGMT 125');"
							>
								MGMT&nbsp;125
							</a>
						</div>
					</td>{" "}
					<td>Negotiations </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;126"
								className="class"
								onClick="return showCourse(this, 'MGMT 126');"
							>
								MGMT&nbsp;126
							</a>
						</div>
					</td>{" "}
					<td>Foundations of Teams </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;128"
								className="class"
								onClick="return showCourse(this, 'MGMT 128');"
							>
								MGMT&nbsp;128
							</a>
						</div>
					</td>{" "}
					<td>International Management </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;129"
								className="class"
								onClick="return showCourse(this, 'MGMT 129');"
							>
								MGMT&nbsp;129
							</a>
						</div>
					</td>{" "}
					<td>Leadership </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							D. International Business Requirement: Fulfillment of the
							International Business requirement by:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								1. Selecting one of the following (which may also be used for
								specified category C requirements above):
							</span>{" "}
							<sup>1</sup>{" "}
						</div>{" "}
					</td>
				</tr>
				<tr className="even">
					<td className="codecol">
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;128"
								className="class"
								onClick="return showCourse(this, 'MGMT 128');"
							>
								MGMT&nbsp;128
							</a>
						</div>
					</td>{" "}
					<td>International Management </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;144"
								className="class"
								onClick="return showCourse(this, 'MGMT 144');"
							>
								MGMT&nbsp;144
							</a>
						</div>
					</td>{" "}
					<td>Multinational Finance </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="MGMT&nbsp;154"
								className="class"
								onClick="return showCourse(this, 'MGMT 154');"
							>
								MGMT&nbsp;154
							</a>
						</div>
					</td>{" "}
					<td>Global Marketing </td>{" "}
				</tr>{" "}
				<tr className="odd lastrow">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								2. or, participating in select UC Education Abroad Program
								options, with prior approval of the Associate Dean.
							</span>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

function MechEngPOS() {
	return (
		<table className="sc_courselist">
			<tbody>
				<tr className="even areaheader firstrow">
					<td colSpan="2">
						<span className="courselistcomment areaheader">
							Mathematics and Basic Science Courses:
						</span>
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					<td className="codecol">
						<a
							title="CHEM&nbsp;1A"
							className="class"
							onClick="return showCourse(this, 'CHEM 1A');"
						>
							CHEM&nbsp;1A
						</a>
					</td>
					<td>General Chemistry </td>
				</tr>
				<tr className="odd orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a
							title="ENGR&nbsp;1A"
							className="class"
							onClick="return showCourse(this, 'ENGR 1A');"
						>
							ENGR&nbsp;1A
						</a>
					</td>
					<td colSpan="1"> General Chemistry for Engineers</td>
				</tr>
				<tr className="even">
					<td className="codecol">
						{" "}
						<a
							title="CHEM&nbsp;1LE"
							className="class"
							onClick="return showCourse(this, 'CHEM 1LE');"
						>
							CHEM&nbsp;1LE
						</a>
					</td>{" "}
					<td>Accelerated General Chemistry Lab </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;2A"
							className="class"
							onClick="return showCourse(this, 'MATH 2A');"
						>
							MATH&nbsp;2A
						</a>
						-
						<a
							title="MATH&nbsp;2B"
							className="class"
							onClick="return showCourse(this, 'MATH 2B');"
						>
							{" "}
							2B
						</a>
					</td>{" "}
					<td>
						Single-Variable Calculus I<br />
						<span style="margin-left:20px;" className="blockindent">
							and Single-Variable Calculus II
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;2D"
							className="class"
							onClick="return showCourse(this, 'MATH 2D');"
						>
							MATH&nbsp;2D
						</a>
					</td>{" "}
					<td>Multivariable Calculus I </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;2E"
							className="class"
							onClick="return showCourse(this, 'MATH 2E');"
						>
							MATH&nbsp;2E
						</a>
					</td>{" "}
					<td>Multivariable Calculus II </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;3A"
							className="class"
							onClick="return showCourse(this, 'MATH 3A');"
						>
							MATH&nbsp;3A
						</a>
					</td>{" "}
					<td>Introduction to Linear Algebra </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;3D"
							className="class"
							onClick="return showCourse(this, 'MATH 3D');"
						>
							MATH&nbsp;3D
						</a>
					</td>{" "}
					<td>Elementary Differential Equations </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="PHYSICS&nbsp;7C"
							className="class"
							onClick="return showCourse(this, 'PHYSICS 7C');"
						>
							PHYSICS&nbsp;7C
						</a>
					</td>{" "}
					<td>Classical Physics </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="PHYSICS&nbsp;7LC"
							className="class"
							onClick="return showCourse(this, 'PHYSICS 7LC');"
						>
							PHYSICS&nbsp;7LC
						</a>
					</td>{" "}
					<td>Classical Physics Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="PHYSICS&nbsp;7D"
							className="class"
							onClick="return showCourse(this, 'PHYSICS 7D');"
						>
							PHYSICS&nbsp;7D
						</a>
						-
						<a
							title="PHYSICS&nbsp;7E"
							className="class"
							onClick="return showCourse(this, 'PHYSICS 7E');"
						>
							{" "}
							7E
						</a>
					</td>{" "}
					<td>
						Classical Physics
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Classical Physics
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="PHYSICS&nbsp;7LD"
							className="class"
							onClick="return showCourse(this, 'PHYSICS 7LD');"
						>
							PHYSICS&nbsp;7LD
						</a>
					</td>{" "}
					<td>Classical Physics Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="PHYSICS&nbsp;52A"
							className="class"
							onClick="return showCourse(this, 'PHYSICS 52A');"
						>
							PHYSICS&nbsp;52A
						</a>
					</td>{" "}
					<td>Fundamentals of Experimental Physics </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							One additional General Education Category II course offered by the
							Schools of Physical Sciences, Biological Sciences, or Information
							and Computer Sciences.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Engineering Topics Courses:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								Students must complete a minimum of 24 units of engineering
								design.
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment areaheader commentindent">
								Core Courses:
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGR&nbsp;54"
								className="class"
								onClick="return showCourse(this, 'ENGR 54');"
							>
								ENGR&nbsp;54
							</a>
						</div>
					</td>{" "}
					<td>Principles of Materials Science and Engineering </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;10"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 10');"
							>
								ENGRMAE&nbsp;10
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Engineering Computations </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;30"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 30');"
							>
								ENGRMAE&nbsp;30
							</a>
						</div>
					</td>{" "}
					<td>Statics </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;52"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 52');"
							>
								ENGRMAE&nbsp;52
							</a>
						</div>
					</td>{" "}
					<td>Computer-Aided Design </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;60"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 60');"
							>
								ENGRMAE&nbsp;60
							</a>
						</div>
					</td>{" "}
					<td>Electric Circuits </td>{" "}
				</tr>{" "}
				<tr className="odd orclass">
					<td className="codecol orclass">
						<div style="margin-left: 20px;">
							or&nbsp;
							<a
								title="EECS&nbsp;70A"
								className="class"
								onClick="return showCourse(this, 'EECS 70A');"
							>
								EECS&nbsp;70A
							</a>
						</div>
					</td>{" "}
					<td colSpan="1"> Network Analysis I</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;80"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 80');"
							>
								ENGRMAE&nbsp;80
							</a>
						</div>
					</td>{" "}
					<td>Dynamics </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;91"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 91');"
							>
								ENGRMAE&nbsp;91
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Thermodynamics </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;106"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 106');"
							>
								ENGRMAE&nbsp;106
							</a>
						</div>
					</td>{" "}
					<td>Mechanical Systems Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;107"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 107');"
							>
								ENGRMAE&nbsp;107
							</a>
						</div>
					</td>{" "}
					<td>Fluid Thermal Science Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;112"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 112');"
							>
								ENGRMAE&nbsp;112
							</a>
						</div>
					</td>{" "}
					<td>Propulsion </td>{" "}
				</tr>{" "}
				<tr className="even orclass">
					<td className="codecol orclass">
						<div style="margin-left: 20px;">
							or&nbsp;
							<a
								title="ENGRMAE&nbsp;115"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 115');"
							>
								ENGRMAE&nbsp;115
							</a>
						</div>
					</td>{" "}
					<td colSpan="1"> Applied Engineering Thermodynamics</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;120"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 120');"
							>
								ENGRMAE&nbsp;120
							</a>
						</div>
					</td>{" "}
					<td>Heat and Mass Transfer </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;130A"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 130A');"
							>
								ENGRMAE&nbsp;130A
							</a>
						</div>
					</td>{" "}
					<td>Fluid Dynamics I </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;130B"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 130B');"
							>
								ENGRMAE&nbsp;130B
							</a>
						</div>
					</td>{" "}
					<td>Fluid Dynamics II </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;145"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 145');"
							>
								ENGRMAE&nbsp;145
							</a>
						</div>
					</td>{" "}
					<td>Theory of Machines and Mechanisms </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;147"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 147');"
							>
								ENGRMAE&nbsp;147
							</a>
						</div>
					</td>{" "}
					<td>Vibrations </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;150"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 150');"
							>
								ENGRMAE&nbsp;150
							</a>
						</div>
					</td>{" "}
					<td>Mechanics of Structures </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;150L"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 150L');"
							>
								ENGRMAE&nbsp;150L
							</a>
						</div>
					</td>{" "}
					<td>Mechanics of Structures Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;151"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 151');"
							>
								ENGRMAE&nbsp;151
							</a>
						</div>
					</td>{" "}
					<td>Mechanical Engineering Design </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;155"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 155');"
							>
								ENGRMAE&nbsp;155
							</a>
						</div>
					</td>{" "}
					<td>Composite Materials and Structures </td>{" "}
				</tr>{" "}
				<tr className="odd orclass">
					<td className="codecol orclass">
						<div style="margin-left: 20px;">
							or&nbsp;
							<a
								title="ENGRMAE&nbsp;156"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 156');"
							>
								ENGRMAE&nbsp;156
							</a>
						</div>
					</td>{" "}
					<td colSpan="1"> Mechanical Behavior and Design Principles</td>{" "}
				</tr>{" "}
				<tr className="odd orclass orclass">
					<td className="codecol orclass">
						<div style="margin-left: 20px;">
							or&nbsp;
							<a
								title="ENGRMAE&nbsp;157"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 157');"
							>
								ENGRMAE&nbsp;157
							</a>
						</div>
					</td>{" "}
					<td colSpan="1"> Lightweight Structures</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;170"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 170');"
							>
								ENGRMAE&nbsp;170
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Control Systems </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGRMAE&nbsp;189"
								className="class"
								onClick="return showCourse(this, 'ENGRMAE 189');"
							>
								ENGRMAE&nbsp;189
							</a>
						</div>
					</td>{" "}
					<td>Senior Project - Special Topics (minimum of 3 units) </td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Technical Elective Courses:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								Students select a minimum of 16 units of technical electives.
								For students majoring in both Aerospace Engineering and
								Mechanical Engineering, a core course in one major cannot be
								counted as a technical elective in the other major. Any
								upper-division course in the department not used for the degree
								may be used as a technical elective. At least 8 units of the
								technical electives must come from ENGRMAE upper-division
								courses other than project-based courses{" "}
								<a
									title="ENGRMAE&nbsp;188"
									className="class"
									onClick="return showCourse(this, 'ENGRMAE 188');"
								>
									ENGRMAE&nbsp;188
								</a>
								,{" "}
								<a
									title="ENGRMAE&nbsp;189"
									className="class"
									onClick="return showCourse(this, 'ENGRMAE 189');"
								>
									ENGRMAE&nbsp;189
								</a>
								, and{" "}
								<a
									title="ENGRMAE&nbsp;199"
									className="class"
									onClick="return showCourse(this, 'ENGRMAE 199');"
								>
									ENGRMAE&nbsp;199
								</a>
								. With approval of the Undergraduate Advisor, students may
								choose any remaining technical elective units from other
								departments’ upper-division courses that have primarily
								technical content. Preapproved courses from other departments
								are listed on the MAE website:
								http://engineering.uci.edu/files/mae-technical-electives.pdf
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Engineering Professional Topics Course:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="ECON&nbsp;20A"
							className="class"
							onClick="return showCourse(this, 'ECON 20A');"
						>
							ECON&nbsp;20A
						</a>
					</td>{" "}
					<td>Basic Economics I </td>{" "}
				</tr>{" "}
				<tr className="odd orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a
							title="ECON&nbsp;23"
							className="class"
							onClick="return showCourse(this, 'ECON 23');"
						>
							ECON&nbsp;23
						</a>
					</td>{" "}
					<td colSpan="1"> Basic Economics for Engineers</td>{" "}
				</tr>{" "}
				<tr className="even lastrow">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="ENGR&nbsp;190W"
							className="class"
							onClick="return showCourse(this, 'ENGR 190W');"
						>
							ENGR&nbsp;190W
						</a>
					</td>
					<td>Communications in the Professional World </td>
				</tr>
			</tbody>
		</table>
	);
}

function MechEngSample() {
	return (
		<table width="100%">
			<tbody>
				<tr className="odd">
					<td>
						<a className="class">MATH 2E</a>
					</td>
				</tr>
				<tr className="even">
					<td>
						<a className="class">ENGRMAE 91</a>
					</td>
				</tr>
				<tr className="odd">
					<td>
						<a className="class">ENGRMAE 130A</a>
					</td>
				</tr>
				<tr className="even">
					<td>
						<a className="class">ECON 23</a> or <a className="class">20A</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

function PsychPOS() {
	return (
		<table className="sc_courselist">
			{" "}
			<tbody>
				{" "}
				<tr className="even firstrow">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							A. Complete the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="PSYCH&nbsp;9A"
							className="class"
							onClick="return showCourse(this, 'PSYCH 9A');"
						>
							PSYCH&nbsp;9A
						</a>
						-
						<a
							title="PSYCH&nbsp;9B"
							className="class"
							onClick="return showCourse(this, 'PSYCH 9B');"
						>
							{" "}
							9B
						</a>
						-
						<a
							title="PSYCH&nbsp;9C"
							className="class"
							onClick="return showCourse(this, 'PSYCH 9C');"
						>
							{" "}
							9C
						</a>
					</td>{" "}
					<td>
						Psychology Fundamentals
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Psychology Fundamentals
						</span>
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Psychology Fundamentals
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							B. Two introductory courses (eight units) in the social sciences
							selected from:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ANTHRO&nbsp;2A"
								className="class"
								onClick="return showCourse(this, 'ANTHRO 2A');"
							>
								ANTHRO&nbsp;2A
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Sociocultural Anthropology </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ANTHRO&nbsp;2B"
								className="class"
								onClick="return showCourse(this, 'ANTHRO 2B');"
							>
								ANTHRO&nbsp;2B
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Biological Anthropology </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ANTHRO&nbsp;2D"
								className="class"
								onClick="return showCourse(this, 'ANTHRO 2D');"
							>
								ANTHRO&nbsp;2D
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Language and Culture </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ECON&nbsp;1"
								className="class"
								onClick="return showCourse(this, 'ECON 1');"
							>
								ECON&nbsp;1
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Economics </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="LSCI&nbsp;3"
								className="class"
								onClick="return showCourse(this, 'LSCI 3');"
							>
								LSCI&nbsp;3
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Linguistics </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="POL&nbsp;SCI&nbsp;11C"
								className="class"
								onClick="return showCourse(this, 'POL SCI 11C');"
							>
								POL&nbsp;SCI&nbsp;11C
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Political Science: Micropolitics </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="SOC&nbsp;SCI&nbsp;5A"
								className="class"
								onClick="return showCourse(this, 'SOC SCI 5A');"
							>
								SOC&nbsp;SCI&nbsp;5A
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Human Geography </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="SOCIOL&nbsp;1"
								className="class"
								onClick="return showCourse(this, 'SOCIOL 1');"
							>
								SOCIOL&nbsp;1
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Sociology </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="SOCIOL&nbsp;2"
								className="class"
								onClick="return showCourse(this, 'SOCIOL 2');"
							>
								SOCIOL&nbsp;2
							</a>
						</div>
					</td>{" "}
					<td>Globalization </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="SOCIOL&nbsp;3"
								className="class"
								onClick="return showCourse(this, 'SOCIOL 3');"
							>
								SOCIOL&nbsp;3
							</a>
						</div>
					</td>{" "}
					<td>Social Problems </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								or one or two quarters of the following when topic is not
								psychology:
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="SOC&nbsp;SCI&nbsp;H1E"
								className="class"
								onClick="return showCourse(this, 'SOC SCI H1E');"
							>
								SOC&nbsp;SCI&nbsp;H1E
							</a>
							-
							<a
								title="SOC&nbsp;SCI&nbsp;H1F"
								className="class"
								onClick="return showCourse(this, 'SOC SCI H1F');"
							>
								{" "}
								H1F
							</a>
							-
							<a
								title="SOC&nbsp;SCI&nbsp;H1G"
								className="class"
								onClick="return showCourse(this, 'SOC SCI H1G');"
							>
								{" "}
								H1G
							</a>
						</div>
					</td>{" "}
					<td>
						Honors: Critical Issues on the Social Sciences
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Honors: Critical Issues on the Social Sciences
						</span>
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Honors: Critical Issues on the Social Sciences
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							C. A one-quarter course and laboratory in experimental psychology
							or research methods selected from the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;112A"
								className="class"
								onClick="return showCourse(this, 'PSYCH 112A');"
							>
								PSYCH&nbsp;112A
							</a>
							-
							<a
								title="PSYCH&nbsp;112LA"
								className="class"
								onClick="return showCourse(this, 'PSYCH 112LA');"
							>
								{" "}
								112LA
							</a>
						</div>
					</td>{" "}
					<td>
						Experimental Psychology
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Experimental Psychology Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;112M"
								className="class"
								onClick="return showCourse(this, 'PSYCH 112M');"
							>
								PSYCH&nbsp;112M
							</a>
							-
							<a
								title="PSYCH&nbsp;112LM"
								className="class"
								onClick="return showCourse(this, 'PSYCH 112LM');"
							>
								{" "}
								112LM
							</a>
						</div>
					</td>{" "}
					<td>
						Research Methods in Psychology
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Research Methods in Psychology Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;112R"
								className="class"
								onClick="return showCourse(this, 'PSYCH 112R');"
							>
								PSYCH&nbsp;112R
							</a>
							-
							<a
								title="PSYCH&nbsp;112LR"
								className="class"
								onClick="return showCourse(this, 'PSYCH 112LR');"
							>
								{" "}
								112LR
							</a>
						</div>
					</td>{" "}
					<td>
						Cognitive Robotics
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Cognitive Robotics Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								NOTE: These courses have as prerequisites{" "}
								<a
									title="PSYCH&nbsp;9A"
									className="class"
									onClick="return showCourse(this, 'PSYCH 9A');"
								>
									PSYCH&nbsp;9A
								</a>
								,{" "}
								<a
									title="PSYCH&nbsp;9B"
									className="class"
									onClick="return showCourse(this, 'PSYCH 9B');"
								>
									PSYCH&nbsp;9B
								</a>
								,{" "}
								<a
									title="PSYCH&nbsp;9C"
									className="class"
									onClick="return showCourse(this, 'PSYCH 9C');"
								>
									PSYCH&nbsp;9C
								</a>{" "}
								and one year of mathematics/statistics (see course listings).
								These prerequisites are strictly enforced.{" "}
								<a
									title="PSYCH&nbsp;112A"
									className="class"
									onClick="return showCourse(this, 'PSYCH 112A');"
								>
									PSYCH&nbsp;112A
								</a>
								,{" "}
								<a
									title="PSYCH&nbsp;112LA"
									className="class"
									onClick="return showCourse(this, 'PSYCH 112LA');"
								>
									PSYCH&nbsp;112LA
								</a>{" "}
								are the first quarter of a multi-quarter sequence that satisfies
								the upper-division writing requirement and allows students to
								plan and conduct research projects. Students taking these
								courses should plan to continue in them through at least the
								second quarter. Students who intend to fulfill the
								upper-division writing requirement in some other way should
								consider taking PSYCH 112D and PSYCH 112LD,{" "}
								<a
									title="PSYCH&nbsp;112M"
									className="class"
									onClick="return showCourse(this, 'PSYCH 112M');"
								>
									PSYCH&nbsp;112M
								</a>{" "}
								and{" "}
								<a
									title="PSYCH&nbsp;112LM"
									className="class"
									onClick="return showCourse(this, 'PSYCH 112LM');"
								>
									PSYCH&nbsp;112LM
								</a>
								, or{" "}
								<a
									title="PSYCH&nbsp;112R"
									className="class"
									onClick="return showCourse(this, 'PSYCH 112R');"
								>
									PSYCH&nbsp;112R
								</a>{" "}
								and{" "}
								<a
									title="PSYCH&nbsp;112LR"
									className="class"
									onClick="return showCourse(this, 'PSYCH 112LR');"
								>
									PSYCH&nbsp;112LR
								</a>{" "}
								to fulfill the laboratory requirement.
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							D. Select four upper-division Psychology core courses (16 units).
							These courses are designated with an ending number &quot;0&quot;
							and include the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;120A"
								className="class"
								onClick="return showCourse(this, 'PSYCH 120A');"
							>
								PSYCH&nbsp;120A
							</a>
						</div>
					</td>{" "}
					<td>Abnormal Psychology </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;120D"
								className="class"
								onClick="return showCourse(this, 'PSYCH 120D');"
							>
								PSYCH&nbsp;120D
							</a>
						</div>
					</td>{" "}
					<td>Developmental Psychology </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;120H"
								className="class"
								onClick="return showCourse(this, 'PSYCH 120H');"
							>
								PSYCH&nbsp;120H
							</a>
						</div>
					</td>{" "}
					<td>History of Psychology </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;120P"
								className="class"
								onClick="return showCourse(this, 'PSYCH 120P');"
							>
								PSYCH&nbsp;120P
							</a>
						</div>
					</td>{" "}
					<td>Personality Theories </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;130A"
								className="class"
								onClick="return showCourse(this, 'PSYCH 130A');"
							>
								PSYCH&nbsp;130A
							</a>
						</div>
					</td>{" "}
					<td>Perception and Sensory Processes </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;140C"
								className="class"
								onClick="return showCourse(this, 'PSYCH 140C');"
							>
								PSYCH&nbsp;140C
							</a>
						</div>
					</td>{" "}
					<td>Cognitive Science </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;140L"
								className="class"
								onClick="return showCourse(this, 'PSYCH 140L');"
							>
								PSYCH&nbsp;140L
							</a>
						</div>
					</td>{" "}
					<td>Principles of Learning Theory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;140M"
								className="class"
								onClick="return showCourse(this, 'PSYCH 140M');"
							>
								PSYCH&nbsp;140M
							</a>
						</div>
					</td>{" "}
					<td>Human Memory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;150"
								className="class"
								onClick="return showCourse(this, 'PSYCH 150');"
							>
								PSYCH&nbsp;150
							</a>
						</div>
					</td>{" "}
					<td>Psychology of Language </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;160A"
								className="class"
								onClick="return showCourse(this, 'PSYCH 160A');"
							>
								PSYCH&nbsp;160A
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Cognitive Neuroscience </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PSYCH&nbsp;160D"
								className="class"
								onClick="return showCourse(this, 'PSYCH 160D');"
							>
								PSYCH&nbsp;160D
							</a>
						</div>
					</td>{" "}
					<td>Brain Disorders and Behavior </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							E. Select seven additional courses (four or more units each) with
							emphasis in psychology, distributed as follows:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								1. No more than one of the seven may be lower-division.{" "}
								<a
									title="PSYCH&nbsp;7A"
									className="class"
									onClick="return showCourse(this, 'PSYCH 7A');"
								>
									PSYCH&nbsp;7A
								</a>{" "}
								may not be used to fulfill this requirement.
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								2. Three of the upper-division courses used to satisfy
								requirements D and E must be taken from one of the following
								modules: Psychology 110–119 (Research Methodologies), 120–129
								(General Psychology), 130–139 (Perception and Sensory
								Processes), 140–149 and 150–159 (Learning and Cognition and
								Language Sciences combined), 160–169 (Cognitive Neuroscience),
								and 170–179 (Interdisciplinary Studies).
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								3. Certain courses offered in the School of Biological Sciences
								and the School of Social Ecology may be used in partial
								satisfaction of this requirement. A total of three of these
								courses (12 units) may be used in this way with a maximum of two
								from either of these Schools.
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								Psychology and Social Behavior courses that do not overlap with
								Psychology courses may be used along with PSY BEH 193E (same as{" "}
								<a
									title="CRM/LAW&nbsp;C105"
									className="class"
									onClick="return showCourse(this, 'CRM/LAW C105');"
								>
									CRM/LAW&nbsp;C105
								</a>
								) and{" "}
								<a
									title="BIO&nbsp;SCI&nbsp;D137"
									className="class"
									onClick="return showCourse(this, 'BIO SCI D137');"
								>
									BIO&nbsp;SCI&nbsp;D137
								</a>
								, BIO SCI E174,{" "}
								<a
									title="BIO&nbsp;SCI&nbsp;N110"
									className="class"
									onClick="return showCourse(this, 'BIO SCI N110');"
								>
									BIO&nbsp;SCI&nbsp;N110
								</a>
								, and BIO SCI N159.
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd lastrow">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								4. No more than three of the courses (each of four or more
								units) may be numbered 190–199.
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
			</tbody>{" "}
		</table>
	);
}

function PsychSample() {
	return (
		<table width="100%">
			<tbody>
				<tr className="odd">
					<td>
						<a className="class">PSYCH 10C</a>
					</td>
				</tr>
				<tr className="even">
					<td>
						<p>Psych. Core course</p>
					</td>
				</tr>
				<tr className="odd">
					<td>
						<p>General Education</p>
					</td>
				</tr>
				<tr className="even">
					<td>
						<p>General Education</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

function CompSciPOS() {
	return (
		<table className="sc_courselist">
			{" "}
			<tbody>
				{" "}
				<tr className="even areaheader firstrow">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Lower-division
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							A. Select one of the following series:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="I&amp;C&nbsp;SCI&nbsp;31"
								className="class"
								onClick="return showCourse(this, 'I&amp;C SCI 31');"
							>
								I&amp;C&nbsp;SCI&nbsp;31
							</a>
							-
							<a
								title="I&amp;C&nbsp;SCI&nbsp;32"
								className="class"
								onClick="return showCourse(this, 'I&amp;C SCI 32');"
							>
								{" "}
								32
							</a>
							-
							<a
								title="I&amp;C&nbsp;SCI&nbsp;33"
								className="class"
								onClick="return showCourse(this, 'I&amp;C SCI 33');"
							>
								{" "}
								33
							</a>
						</div>
					</td>{" "}
					<td>
						Introduction to Programming
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Programming with Software Libraries
						</span>
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Intermediate Programming
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">or</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="I&amp;C&nbsp;SCI&nbsp;32A"
								className="class"
								onClick="return showCourse(this, 'I&amp;C SCI 32A');"
							>
								I&amp;C&nbsp;SCI&nbsp;32A
							</a>
							-
							<a
								title="I&amp;C&nbsp;SCI&nbsp;33"
								className="class"
								onClick="return showCourse(this, 'I&amp;C SCI 33');"
							>
								{" "}
								33
							</a>
						</div>
					</td>{" "}
					<td>
						Python Programming and Libraries (Accelerated)
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Intermediate Programming
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">B. Complete:</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="I&amp;C&nbsp;SCI&nbsp;45C"
							className="class"
							onClick="return showCourse(this, 'I&amp;C SCI 45C');"
						>
							I&amp;C&nbsp;SCI&nbsp;45C
						</a>
					</td>{" "}
					<td>Programming in C/C++ as a Second Language </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="I&amp;C&nbsp;SCI&nbsp;46"
							className="class"
							onClick="return showCourse(this, 'I&amp;C SCI 46');"
						>
							I&amp;C&nbsp;SCI&nbsp;46
						</a>
					</td>{" "}
					<td>Data Structure Implementation and Analysis </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="I&amp;C&nbsp;SCI&nbsp;51"
							className="class"
							onClick="return showCourse(this, 'I&amp;C SCI 51');"
						>
							I&amp;C&nbsp;SCI&nbsp;51
						</a>
					</td>{" "}
					<td>Introductory Computer Organization </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="I&amp;C&nbsp;SCI&nbsp;53"
							className="class"
							onClick="return showCourse(this, 'I&amp;C SCI 53');"
						>
							I&amp;C&nbsp;SCI&nbsp;53
						</a>
					</td>{" "}
					<td>Principles in System Design </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="IN4MATX&nbsp;43"
							className="class"
							onClick="return showCourse(this, 'IN4MATX 43');"
						>
							IN4MATX&nbsp;43
						</a>
					</td>{" "}
					<td>Introduction to Software Engineering </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;2A"
							className="class"
							onClick="return showCourse(this, 'MATH 2A');"
						>
							MATH&nbsp;2A
						</a>
						-
						<a
							title="MATH&nbsp;2B"
							className="class"
							onClick="return showCourse(this, 'MATH 2B');"
						>
							{" "}
							2B
						</a>
					</td>{" "}
					<td>
						Single-Variable Calculus I<br />
						<span style="margin-left:20px;" className="blockindent">
							and Single-Variable Calculus II
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="I&amp;C&nbsp;SCI&nbsp;6B"
							className="class"
							onClick="return showCourse(this, 'I&amp;C SCI 6B');"
						>
							I&amp;C&nbsp;SCI&nbsp;6B
						</a>
					</td>{" "}
					<td>Boolean Logic and Discrete Structures </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="I&amp;C&nbsp;SCI&nbsp;6D"
							className="class"
							onClick="return showCourse(this, 'I&amp;C SCI 6D');"
						>
							I&amp;C&nbsp;SCI&nbsp;6D
						</a>
					</td>{" "}
					<td>Discrete Mathematics for Computer Science </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="I&amp;C&nbsp;SCI&nbsp;6N"
							className="class"
							onClick="return showCourse(this, 'I&amp;C SCI 6N');"
						>
							I&amp;C&nbsp;SCI&nbsp;6N
						</a>
					</td>{" "}
					<td>Computational Linear Algebra </td>{" "}
				</tr>{" "}
				<tr className="even orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a
							title="MATH&nbsp;3A"
							className="class"
							onClick="return showCourse(this, 'MATH 3A');"
						>
							MATH&nbsp;3A
						</a>
					</td>{" "}
					<td colSpan="1"> Introduction to Linear Algebra</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="STATS&nbsp;67"
							className="class"
							onClick="return showCourse(this, 'STATS 67');"
						>
							STATS&nbsp;67
						</a>
					</td>{" "}
					<td>
						Introduction to Probability and Statistics for Computer Science{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							C. Two courses approved for General Education category II except
							those offered by CSE, Economics, Engineering, ICS, or Mathematics.
							University Studies courses can be used with the approval of the CS
							Vice Chair for Undergraduate Studies.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Upper-division
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">A. Core</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;161"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 161');"
						>
							COMPSCI&nbsp;161
						</a>
					</td>{" "}
					<td>Design and Analysis of Algorithms </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="I&amp;C&nbsp;SCI&nbsp;139W"
							className="class"
							onClick="return showCourse(this, 'I&amp;C SCI 139W');"
						>
							I&amp;C&nbsp;SCI&nbsp;139W
						</a>
					</td>{" "}
					<td>Critical Writing on Information Technology </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							B. Upper-division electives: Select 11 upper-division courses from
							the list below. Sections B-1 and B-2 must be completed as part of
							the 11 upper-division electives.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<div style="margin-left: 20px;">
							<span className="courselistcomment commentindent">
								<a
									title="COMPSCI&nbsp;103"
									className="class"
									onClick="return showCourse(this, 'COMPSCI 103');"
								>
									COMPSCI&nbsp;103
								</a>
								–160, 162-189
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;102"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 102');"
							>
								IN4MATX&nbsp;102
							</a>
						</div>
					</td>{" "}
					<td>Concepts of Programming Language II </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;113"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 113');"
							>
								IN4MATX&nbsp;113
							</a>
						</div>
					</td>{" "}
					<td>Requirements Analysis and Engineering </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;115"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 115');"
							>
								IN4MATX&nbsp;115
							</a>
						</div>
					</td>{" "}
					<td>Software Testing, Analysis, and Quality Assurance </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;117"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 117');"
							>
								IN4MATX&nbsp;117
							</a>
						</div>
					</td>{" "}
					<td>Project in Software System Design </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;121"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 121');"
							>
								IN4MATX&nbsp;121
							</a>
						</div>
					</td>{" "}
					<td>Software Design: Applications </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;122"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 122');"
							>
								IN4MATX&nbsp;122
							</a>
						</div>
					</td>{" "}
					<td>Software Design: Structure and Implementation </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;124"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 124');"
							>
								IN4MATX&nbsp;124
							</a>
						</div>
					</td>{" "}
					<td>Internet Applications Engineering </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;131"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 131');"
							>
								IN4MATX&nbsp;131
							</a>
						</div>
					</td>{" "}
					<td>Human Computer Interaction </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;133"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 133');"
							>
								IN4MATX&nbsp;133
							</a>
						</div>
					</td>{" "}
					<td>User Interaction Software </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;134"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 134');"
							>
								IN4MATX&nbsp;134
							</a>
						</div>
					</td>{" "}
					<td>Project in User Interaction Software </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="I&amp;C&nbsp;SCI&nbsp;161"
								className="class"
								onClick="return showCourse(this, 'I&amp;C SCI 161');"
							>
								I&amp;C&nbsp;SCI&nbsp;161
							</a>
						</div>
					</td>{" "}
					<td>Game Engine Lab </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="I&amp;C&nbsp;SCI&nbsp;162"
								className="class"
								onClick="return showCourse(this, 'I&amp;C SCI 162');"
							>
								I&amp;C&nbsp;SCI&nbsp;162
							</a>
						</div>
					</td>{" "}
					<td>Modeling and World Building </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							B-1. Project Courses: Choose at least two projects courses from
							the following list:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;113"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 113');"
							>
								COMPSCI&nbsp;113
							</a>
						</div>
					</td>{" "}
					<td>Computer Game Development </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;114"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 114');"
							>
								COMPSCI&nbsp;114
							</a>
						</div>
					</td>{" "}
					<td>Projects in Advanced 3D Computer Graphics </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;117"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 117');"
							>
								COMPSCI&nbsp;117
							</a>
						</div>
					</td>{" "}
					<td>Project in Computer Vision </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;118"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 118');"
							>
								COMPSCI&nbsp;118
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Virtual Reality </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;122B"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 122B');"
							>
								COMPSCI&nbsp;122B
							</a>
						</div>
					</td>{" "}
					<td>Project in Databases and Web Applications </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;122C"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 122C');"
							>
								COMPSCI&nbsp;122C
							</a>
						</div>
					</td>{" "}
					<td>Principles of Data Management </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;122D"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 122D');"
							>
								COMPSCI&nbsp;122D
							</a>
						</div>
					</td>{" "}
					<td>Beyond SQL Data Management </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;125"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 125');"
							>
								COMPSCI&nbsp;125
							</a>
						</div>
					</td>{" "}
					<td>Next Generation Search Systems </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;133"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 133');"
							>
								COMPSCI&nbsp;133
							</a>
						</div>
					</td>{" "}
					<td>Advanced Computer Networks </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;142B"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 142B');"
							>
								COMPSCI&nbsp;142B
							</a>
						</div>
					</td>{" "}
					<td>Language Processor Construction </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;143B"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 143B');"
							>
								COMPSCI&nbsp;143B
							</a>
						</div>
					</td>{" "}
					<td>Project in Operating System Organization </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;145"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 145');"
							>
								COMPSCI&nbsp;145
							</a>
						</div>
					</td>{" "}
					<td>Embedded Software </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;147"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 147');"
							>
								COMPSCI&nbsp;147
							</a>
						</div>
					</td>{" "}
					<td>Internet of Things (IoT) Software and Systems </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;153"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 153');"
							>
								COMPSCI&nbsp;153
							</a>
						</div>
					</td>{" "}
					<td>Logic Design Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;154"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 154');"
							>
								COMPSCI&nbsp;154
							</a>
						</div>
					</td>{" "}
					<td>Computer Design Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;165"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 165');"
							>
								COMPSCI&nbsp;165
							</a>
						</div>
					</td>{" "}
					<td>Project in Algorithms and Data Structures </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="COMPSCI&nbsp;175"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 175');"
							>
								COMPSCI&nbsp;175
							</a>
						</div>
					</td>{" "}
					<td>Project in Artificial Intelligence </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;117"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 117');"
							>
								IN4MATX&nbsp;117
							</a>
						</div>
					</td>{" "}
					<td>Project in Software System Design </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="IN4MATX&nbsp;134"
								className="class"
								onClick="return showCourse(this, 'IN4MATX 134');"
							>
								IN4MATX&nbsp;134
							</a>
						</div>
					</td>{" "}
					<td>Project in User Interaction Software </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							B-2. Specialization: Select and satisfy the requirements for one
							of the specializations below. (Note: Students may not pursue more
							than one specialization.)
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Some of the specializations include recommended electives. These
							are courses related to the specialization and intended to help
							students choose courses to take toward their upper-division
							elective requirement.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Algorithms: Four courses from the following list:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;162"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 162');"
						>
							COMPSCI&nbsp;162
						</a>
					</td>{" "}
					<td>Formal Languages and Automata </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;163"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 163');"
						>
							COMPSCI&nbsp;163
						</a>
					</td>{" "}
					<td>Graph Algorithms </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;164"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 164');"
						>
							COMPSCI&nbsp;164
						</a>
					</td>{" "}
					<td>Computational Geometry and Geometric Modeling </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;165"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 165');"
						>
							COMPSCI&nbsp;165
						</a>
					</td>{" "}
					<td>Project in Algorithms and Data Structures </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;166"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 166');"
						>
							COMPSCI&nbsp;166
						</a>
					</td>{" "}
					<td>Quantum Computation and Information </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;167"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 167');"
						>
							COMPSCI&nbsp;167
						</a>
					</td>{" "}
					<td>Introduction to Applied Cryptography </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;169"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 169');"
						>
							COMPSCI&nbsp;169
						</a>
					</td>{" "}
					<td>Introduction to Optimization </td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Architecture and Embedded Systems: four courses from the following
							list:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;145"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 145');"
						>
							COMPSCI&nbsp;145
						</a>
					</td>{" "}
					<td>Embedded Software </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;147"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 147');"
						>
							COMPSCI&nbsp;147
						</a>
					</td>{" "}
					<td>Internet of Things (IoT) Software and Systems </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;151"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 151');"
						>
							COMPSCI&nbsp;151
						</a>
					</td>{" "}
					<td>Digital Logic Design </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;152"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 152');"
						>
							COMPSCI&nbsp;152
						</a>
					</td>{" "}
					<td>Computer Systems Architecture </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;153"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 153');"
						>
							COMPSCI&nbsp;153
						</a>
					</td>{" "}
					<td>Logic Design Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;154"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 154');"
						>
							COMPSCI&nbsp;154
						</a>
					</td>{" "}
					<td>Computer Design Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Bioinformatics: three courses from the following list:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;184A"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 184A');"
						>
							COMPSCI&nbsp;184A
						</a>
					</td>{" "}
					<td>Artificial Intelligence in Biology and Medicine </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">and complete:</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;172B"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 172B');"
						>
							COMPSCI&nbsp;172B
						</a>
					</td>{" "}
					<td>Neural Networks and Deep Learning </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;172C"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 172C');"
						>
							COMPSCI&nbsp;172C
						</a>
					</td>{" "}
					<td>
						Artificial Intelligence Frontiers: Technical, Ethical, and Societal{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;184C"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 184C');"
						>
							COMPSCI&nbsp;184C
						</a>
					</td>{" "}
					<td>Computational Systems Biology </td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							General CS track - 11 courses from the following list:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							<a
								title="COMPSCI&nbsp;103"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 103');"
							>
								COMPSCI&nbsp;103
							</a>
							-189, except{" "}
							<a
								title="COMPSCI&nbsp;161"
								className="class"
								onClick="return showCourse(this, 'COMPSCI 161');"
							>
								COMPSCI&nbsp;161
							</a>
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Information
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;121"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 121');"
						>
							COMPSCI&nbsp;121
						</a>
					</td>{" "}
					<td>Information Retrieval </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;122A"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 122A');"
						>
							COMPSCI&nbsp;122A
						</a>
					</td>{" "}
					<td>Introduction to Data Management </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;178"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 178');"
						>
							COMPSCI&nbsp;178
						</a>
					</td>{" "}
					<td>Machine Learning and Data-Mining </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							and four courses from:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="I&amp;C&nbsp;SCI&nbsp;45J"
							className="class"
							onClick="return showCourse(this, 'I&amp;C SCI 45J');"
						>
							I&amp;C&nbsp;SCI&nbsp;45J
						</a>
					</td>{" "}
					<td>Programming in Java as a Second Language </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;122B"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 122B');"
						>
							COMPSCI&nbsp;122B
						</a>
					</td>{" "}
					<td>Project in Databases and Web Applications </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;122C"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 122C');"
						>
							COMPSCI&nbsp;122C
						</a>
					</td>{" "}
					<td>Principles of Data Management </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;122D"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 122D');"
						>
							COMPSCI&nbsp;122D
						</a>
					</td>{" "}
					<td>Beyond SQL Data Management </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;125"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 125');"
						>
							COMPSCI&nbsp;125
						</a>
					</td>{" "}
					<td>Next Generation Search Systems </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;132"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 132');"
						>
							COMPSCI&nbsp;132
						</a>
					</td>{" "}
					<td>Computer Networks </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;134"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 134');"
						>
							COMPSCI&nbsp;134
						</a>
					</td>{" "}
					<td>Computer and Network Security </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;141"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 141');"
						>
							COMPSCI&nbsp;141
						</a>
					</td>{" "}
					<td>Concepts in Programming Languages I </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;142A"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 142A');"
						>
							COMPSCI&nbsp;142A
						</a>
					</td>{" "}
					<td>Compilers and Interpreters </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;143A"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 143A');"
						>
							COMPSCI&nbsp;143A
						</a>
					</td>{" "}
					<td>Principles of Operating Systems </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;163"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 163');"
						>
							COMPSCI&nbsp;163
						</a>
					</td>{" "}
					<td>Graph Algorithms </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;165"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 165');"
						>
							COMPSCI&nbsp;165
						</a>
					</td>{" "}
					<td>Project in Algorithms and Data Structures </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;167"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 167');"
						>
							COMPSCI&nbsp;167
						</a>
					</td>{" "}
					<td>Introduction to Applied Cryptography </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;179"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 179');"
						>
							COMPSCI&nbsp;179
						</a>
					</td>{" "}
					<td>
						Algorithms for Probabilistic and Deterministic Graphical Models{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							at least one of which must be:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;122B"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 122B');"
						>
							COMPSCI&nbsp;122B
						</a>
					</td>{" "}
					<td>Project in Databases and Web Applications </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;122C"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 122C');"
						>
							COMPSCI&nbsp;122C
						</a>
					</td>{" "}
					<td>Principles of Data Management </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;122D"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 122D');"
						>
							COMPSCI&nbsp;122D
						</a>
					</td>{" "}
					<td>Beyond SQL Data Management </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;125"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 125');"
						>
							COMPSCI&nbsp;125
						</a>
					</td>{" "}
					<td>Next Generation Search Systems </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;179"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 179');"
						>
							COMPSCI&nbsp;179
						</a>
					</td>{" "}
					<td>
						Algorithms for Probabilistic and Deterministic Graphical Models{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Intelligent Systems
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;171"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 171');"
						>
							COMPSCI&nbsp;171
						</a>
					</td>{" "}
					<td>Introduction to Artificial Intelligence </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;175"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 175');"
						>
							COMPSCI&nbsp;175
						</a>
					</td>{" "}
					<td>Project in Artificial Intelligence </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;178"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 178');"
						>
							COMPSCI&nbsp;178
						</a>
					</td>{" "}
					<td>Machine Learning and Data-Mining </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							and at least three courses from:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;116"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 116');"
						>
							COMPSCI&nbsp;116
						</a>
					</td>{" "}
					<td>Computational Photography and Vision </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;121"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 121');"
						>
							COMPSCI&nbsp;121
						</a>
					</td>{" "}
					<td>Information Retrieval </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;125"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 125');"
						>
							COMPSCI&nbsp;125
						</a>
					</td>{" "}
					<td>Next Generation Search Systems </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;162"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 162');"
						>
							COMPSCI&nbsp;162
						</a>
					</td>{" "}
					<td>Formal Languages and Automata </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;163"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 163');"
						>
							COMPSCI&nbsp;163
						</a>
					</td>{" "}
					<td>Graph Algorithms </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;164"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 164');"
						>
							COMPSCI&nbsp;164
						</a>
					</td>{" "}
					<td>Computational Geometry and Geometric Modeling </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;169"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 169');"
						>
							COMPSCI&nbsp;169
						</a>
					</td>{" "}
					<td>Introduction to Optimization </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;177"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 177');"
						>
							COMPSCI&nbsp;177
						</a>
					</td>{" "}
					<td>Applications of Probability in Computer Science </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;179"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 179');"
						>
							COMPSCI&nbsp;179
						</a>
					</td>{" "}
					<td>
						Algorithms for Probabilistic and Deterministic Graphical Models{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Networked Systems
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;132"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 132');"
						>
							COMPSCI&nbsp;132
						</a>
					</td>{" "}
					<td>Computer Networks </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;133"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 133');"
						>
							COMPSCI&nbsp;133
						</a>
					</td>{" "}
					<td>Advanced Computer Networks </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;134"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 134');"
						>
							COMPSCI&nbsp;134
						</a>
					</td>{" "}
					<td>Computer and Network Security </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;143A"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 143A');"
						>
							COMPSCI&nbsp;143A
						</a>
					</td>{" "}
					<td>Principles of Operating Systems </td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Systems and Software: three courses from the following list:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;131"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 131');"
						>
							COMPSCI&nbsp;131
						</a>
					</td>{" "}
					<td>Parallel and Distributed Computing </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;141"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 141');"
						>
							COMPSCI&nbsp;141
						</a>
					</td>{" "}
					<td>Concepts in Programming Languages I </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;142A"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 142A');"
						>
							COMPSCI&nbsp;142A
						</a>
					</td>{" "}
					<td>Compilers and Interpreters </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;142B"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 142B');"
						>
							COMPSCI&nbsp;142B
						</a>
					</td>{" "}
					<td>Language Processor Construction </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;143A"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 143A');"
						>
							COMPSCI&nbsp;143A
						</a>
					</td>{" "}
					<td>Principles of Operating Systems </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;143B"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 143B');"
						>
							COMPSCI&nbsp;143B
						</a>
					</td>{" "}
					<td>Project in Operating System Organization </td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Visual Computing: four courses from the following list:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;111"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 111');"
						>
							COMPSCI&nbsp;111
						</a>
					</td>{" "}
					<td>Digital Image Processing </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;112"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 112');"
						>
							COMPSCI&nbsp;112
						</a>
					</td>{" "}
					<td>Computer Graphics </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;114"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 114');"
						>
							COMPSCI&nbsp;114
						</a>
					</td>{" "}
					<td>Projects in Advanced 3D Computer Graphics </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;116"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 116');"
						>
							COMPSCI&nbsp;116
						</a>
					</td>{" "}
					<td>Computational Photography and Vision </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;117"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 117');"
						>
							COMPSCI&nbsp;117
						</a>
					</td>{" "}
					<td>Project in Computer Vision </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="COMPSCI&nbsp;118"
							className="class"
							onClick="return showCourse(this, 'COMPSCI 118');"
						>
							COMPSCI&nbsp;118
						</a>
					</td>{" "}
					<td>Introduction to Virtual Reality </td>{" "}
				</tr>{" "}
				<tr className="even lastrow">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="I&amp;C&nbsp;SCI&nbsp;162"
							className="class"
							onClick="return showCourse(this, 'I&amp;C SCI 162');"
						>
							I&amp;C&nbsp;SCI&nbsp;162
						</a>
					</td>{" "}
					<td>Modeling and World Building </td>{" "}
				</tr>{" "}
			</tbody>{" "}
		</table>
	);
}

function CompSciSample() {
	return (
		<table width="100%">
			<tbody>
				<tr className="odd">
					<td>
						<a className="class">I&C SCI 53</a>
					</td>
				</tr>
				<tr className="even">
					<td>
						<a className="class">STATS 67</a>
					</td>
				</tr>
				<tr className="odd">
					<td>
						<p>Computer Science Spec./Elective</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

function MathPOS() {
	return (
		<table className="sc_courselist">
			{" "}
			<tbody>
				{" "}
				<tr className="even areaheader firstrow">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Lower-Division Requirements:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							A. Complete the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;2A"
							className="class"
							onClick="return showCourse(this, 'MATH 2A');"
						>
							MATH&nbsp;2A
						</a>
						-
						<a
							title="MATH&nbsp;2B"
							className="class"
							onClick="return showCourse(this, 'MATH 2B');"
						>
							{" "}
							2B
						</a>
					</td>{" "}
					<td>
						Single-Variable Calculus I<br />
						<span style="margin-left:20px;" className="blockindent">
							and Single-Variable Calculus II
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;2D"
							className="class"
							onClick="return showCourse(this, 'MATH 2D');"
						>
							MATH&nbsp;2D
						</a>
					</td>{" "}
					<td>Multivariable Calculus I </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;3A"
							className="class"
							onClick="return showCourse(this, 'MATH 3A');"
						>
							MATH&nbsp;3A
						</a>
					</td>{" "}
					<td>Introduction to Linear Algebra </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;3D"
							className="class"
							onClick="return showCourse(this, 'MATH 3D');"
						>
							MATH&nbsp;3D
						</a>
					</td>{" "}
					<td>Elementary Differential Equations </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;13"
							className="class"
							onClick="return showCourse(this, 'MATH 13');"
						>
							MATH&nbsp;13
						</a>
					</td>{" "}
					<td>Introduction to Abstract Mathematics </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">B. Computing skills:</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;9"
							className="class"
							onClick="return showCourse(this, 'MATH 9');"
						>
							MATH&nbsp;9
						</a>
					</td>{" "}
					<td>Introduction to Programming for Numerical Analysis </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							C. Select one three-quarter lecture course sequence from the
							following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="CHEM&nbsp;1A"
								className="class"
								onClick="return showCourse(this, 'CHEM 1A');"
							>
								CHEM&nbsp;1A
							</a>
							-
							<a
								title="CHEM&nbsp;1B"
								className="class"
								onClick="return showCourse(this, 'CHEM 1B');"
							>
								{" "}
								1B
							</a>
							-
							<a
								title="CHEM&nbsp;1C"
								className="class"
								onClick="return showCourse(this, 'CHEM 1C');"
							>
								{" "}
								1C
							</a>
						</div>
					</td>{" "}
					<td>
						General Chemistry
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and General Chemistry
						</span>
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and General Chemistry{" "}
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="PHYSICS&nbsp;7C"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7C');"
							>
								PHYSICS&nbsp;7C
							</a>
							-
							<a
								title="PHYSICS&nbsp;7D"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7D');"
							>
								{" "}
								7D
							</a>
							-
							<a
								title="PHYSICS&nbsp;7E"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7E');"
							>
								{" "}
								7E
							</a>
						</div>
					</td>{" "}
					<td>
						Classical Physics
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Classical Physics
						</span>
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Classical Physics
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="STATS&nbsp;7"
								className="class"
								onClick="return showCourse(this, 'STATS 7');"
							>
								STATS&nbsp;7
							</a>
							-
							<a
								title="MATH&nbsp;10"
								className="class"
								onClick="return showCourse(this, 'MATH 10');"
							>
								MATH&nbsp;10
							</a>
							-
							<a
								title="PHYSICS&nbsp;7C"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7C');"
							>
								PHYSICS&nbsp;7C
							</a>
						</div>
					</td>{" "}
					<td>
						Basic Statistics
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Introduction to Programming for Data Science
						</span>
						<br />
						<span style="margin-left:20px;" className="blockindent">
							and Classical Physics
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Upper-Division Requirements:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">A. Complete:</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;120A"
							className="class"
							onClick="return showCourse(this, 'MATH 120A');"
						>
							MATH&nbsp;120A
						</a>
					</td>{" "}
					<td>Introduction to Abstract Algebra: Groups </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;121A"
							className="class"
							onClick="return showCourse(this, 'MATH 121A');"
						>
							MATH&nbsp;121A
						</a>
					</td>{" "}
					<td>Linear Algebra I </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;130A"
							className="class"
							onClick="return showCourse(this, 'MATH 130A');"
						>
							MATH&nbsp;130A
						</a>
					</td>{" "}
					<td>Probability I </td>{" "}
				</tr>{" "}
				<tr className="even lastrow">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;140A"
							className="class"
							onClick="return showCourse(this, 'MATH 140A');"
						>
							MATH&nbsp;140A
						</a>
						-
						<a
							title="MATH&nbsp;140B"
							className="class"
							onClick="return showCourse(this, 'MATH 140B');"
						>
							{" "}
							140B
						</a>
					</td>{" "}
					<td>
						Elementary Analysis I<br />
						<span style="margin-left:20px;" className="blockindent">
							and Elementary Analysis II
						</span>{" "}
					</td>{" "}
				</tr>{" "}
			</tbody>{" "}
		</table>
	);
}

function MathSample() {
	return (
		<table width="100%">
			<tbody>
				<tr className="odd">
					<td>
						<a className="class">MATH 3D</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

function SociologyPOS() {
	return (
		<table className="sc_courselist">
			{" "}
			<tbody>
				{" "}
				<tr className="even firstrow">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							A. Complete the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="SOCIOL&nbsp;1"
							className="class"
							onClick="return showCourse(this, 'SOCIOL 1');"
						>
							SOCIOL&nbsp;1
						</a>
					</td>{" "}
					<td>Introduction to Sociology </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="SOCIOL&nbsp;2"
							className="class"
							onClick="return showCourse(this, 'SOCIOLtbody 2');"
						>
							SOCIOL&nbsp;2
						</a>
					</td>{" "}
					<td>Globalization and Transnational Sociology </td>{" "}
				</tr>{" "}
				<tr className="even orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a
							title="SOCIOL&nbsp;3"
							className="class"
							onClick="return showCourse(this, 'SOCIOL 3');"
						>
							SOCIOL&nbsp;3
						</a>
					</td>{" "}
					<td colSpan="1"> Social Problems</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							B. Complete one course in methods and one in theory:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="SOCIOL&nbsp;110"
							className="class"
							onClick="return showCourse(this, 'SOCIOL 110');"
						>
							SOCIOL&nbsp;110
						</a>
					</td>{" "}
					<td>Research Methods </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="SOCIOL&nbsp;120"
							className="class"
							onClick="return showCourse(this, 'SOCIOL 120');"
						>
							SOCIOL&nbsp;120
						</a>
					</td>{" "}
					<td>Sociological Theory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							C. Complete one course in research design and implementation:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="SOCIOL&nbsp;180A"
							className="class"
							onClick="return showCourse(this, 'SOCIOL 180A');"
						>
							SOCIOL&nbsp;180A
						</a>
					</td>{" "}
					<td>Sociology Majors Seminar </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							D. Complete seven SOCIOL courses, of which no more than three may
							be lower-division.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd lastrow">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							E. Complete three additional School of Social Sciences courses, of
							which no more than one may be lower-division.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
			</tbody>{" "}
		</table>
	);
}

function EnglishPOS() {
	return (
		<table className="sc_courselist">
			{" "}
			<tbody>
				{" "}
				<tr className="even firstrow">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							A. Select three of the following, at least one of which must be{" "}
							<a
								title="ENGLISH&nbsp;15"
								className="class"
								onClick="return showCourse(this, 'ENGLISH 15');"
							>
								ENGLISH&nbsp;15
							</a>
						</span>{" "}
						<sup>1</sup>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGLISH&nbsp;8"
								className="class"
								onClick="return showCourse(this, 'ENGLISH 8');"
							>
								ENGLISH&nbsp;8
							</a>
						</div>
					</td>{" "}
					<td>Multicultural American Literature </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGLISH&nbsp;9"
								className="class"
								onClick="return showCourse(this, 'ENGLISH 9');"
							>
								ENGLISH&nbsp;9
							</a>
						</div>
					</td>{" "}
					<td>Shakespeare </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGLISH&nbsp;10"
								className="class"
								onClick="return showCourse(this, 'ENGLISH 10');"
							>
								ENGLISH&nbsp;10
							</a>
						</div>
					</td>{" "}
					<td>Topics in English and American Literature </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGLISH&nbsp;11"
								className="class"
								onClick="return showCourse(this, 'ENGLISH 11');"
							>
								ENGLISH&nbsp;11
							</a>
						</div>
					</td>{" "}
					<td>Society, Law, and Literature </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGLISH&nbsp;12"
								className="class"
								onClick="return showCourse(this, 'ENGLISH 12');"
							>
								ENGLISH&nbsp;12
							</a>
						</div>
					</td>{" "}
					<td>Young Adult Fiction </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGLISH&nbsp;15"
								className="class"
								onClick="return showCourse(this, 'ENGLISH 15');"
							>
								ENGLISH&nbsp;15
							</a>
						</div>
					</td>{" "}
					<td>Introductory Seminar in English: Topics in Literary Studies </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGLISH&nbsp;16"
								className="class"
								onClick="return showCourse(this, 'ENGLISH 16');"
							>
								ENGLISH&nbsp;16
							</a>
						</div>
					</td>{" "}
					<td>The Craft of Poetry </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style="margin-left: 20px;">
							<a
								title="ENGLISH&nbsp;17"
								className="class"
								onClick="return showCourse(this, 'ENGLISH 17');"
							>
								ENGLISH&nbsp;17
							</a>
						</div>
					</td>{" "}
					<td>The Craft of Fiction </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							B. Complete the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="ENGLISH&nbsp;100"
							className="class"
							onClick="return showCourse(this, 'ENGLISH 100');"
						>
							ENGLISH&nbsp;100
						</a>
					</td>{" "}
					<td>Introduction to Literary Theory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="ENGLISH&nbsp;101W"
							className="class"
							onClick="return showCourse(this, 'ENGLISH 101W');"
						>
							ENGLISH&nbsp;101W
						</a>
					</td>{" "}
					<td>
						Undergraduate Seminar in Critical Writing: Topics in Literary
						History{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							C. Complete the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="ENGLISH&nbsp;102A"
							className="class"
							onClick="return showCourse(this, 'ENGLISH 102A');"
						>
							ENGLISH&nbsp;102A
						</a>
					</td>{" "}
					<td>Topics in Medieval and Renaissance Literature </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="ENGLISH&nbsp;102B"
							className="class"
							onClick="return showCourse(this, 'ENGLISH 102B');"
						>
							ENGLISH&nbsp;102B
						</a>
					</td>{" "}
					<td>Topics in Restoration and 18th-Century Literature </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="ENGLISH&nbsp;102C"
							className="class"
							onClick="return showCourse(this, 'ENGLISH 102C');"
						>
							ENGLISH&nbsp;102C
						</a>
					</td>{" "}
					<td>Topics in Romantic and 19th-Century Literature </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="ENGLISH&nbsp;102D"
							className="class"
							onClick="return showCourse(this, 'ENGLISH 102D');"
						>
							ENGLISH&nbsp;102D
						</a>
					</td>{" "}
					<td>Topics in 20th-Century Literature </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="ENGLISH&nbsp;105"
							className="class"
							onClick="return showCourse(this, 'ENGLISH 105');"
						>
							ENGLISH&nbsp;105
						</a>
					</td>{" "}
					<td>Multicultural Topics in Literatures in English </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="ENGLISH&nbsp;106"
							className="class"
							onClick="return showCourse(this, 'ENGLISH 106');"
						>
							ENGLISH&nbsp;106
						</a>
					</td>{" "}
					<td>Advanced Seminar: Topics in English Literature </td>{" "}
				</tr>{" "}
				<tr className="odd lastrow">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							D. Select at least three more Departmental (English, Literary
							Journalism, Writing) courses numbered 102 or above, excluding{" "}
							<a
								title="ENGLISH&nbsp;150"
								className="class"
								onClick="return showCourse(this, 'ENGLISH 150');"
							>
								ENGLISH&nbsp;150
							</a>
							,{" "}
							<a
								title="LIT&nbsp;JRN&nbsp;197"
								className="class"
								onClick="return showCourse(this, 'LIT JRN 197');"
							>
								LIT&nbsp;JRN&nbsp;197
							</a>
							,{" "}
							<a
								title="LIT&nbsp;JRN&nbsp;198"
								className="class"
								onClick="return showCourse(this, 'LIT JRN 198');"
							>
								LIT&nbsp;JRN&nbsp;198
							</a>
							,{" "}
							<a
								title="LIT&nbsp;JRN&nbsp;199"
								className="class"
								onClick="return showCourse(this, 'LIT JRN 199');"
							>
								LIT&nbsp;JRN&nbsp;199
							</a>
							,{" "}
							<a
								title="WRITING&nbsp;139W"
								className="class"
								onClick="return showCourse(this, 'WRITING 139W');"
							>
								WRITING&nbsp;139W
							</a>
							, and{" "}
							<a
								title="WRITING&nbsp;197"
								className="class"
								onClick="return showCourse(this, 'WRITING 197');"
							>
								WRITING&nbsp;197
							</a>
							. An upper-division course in a foreign literature in the original
							language or in translation may be substituted for one of the three
							courses.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
			</tbody>{" "}
		</table>
	);
}

export {
	BioSciPOS,
	BioSciSample,
	BusinessPOS,
	MechEngPOS,
	MechEngSample,
	PsychPOS,
	PsychSample,
	CompSciPOS,
	CompSciSample,
	MathPOS,
	MathSample,
	SociologyPOS,
	EnglishPOS,
};
