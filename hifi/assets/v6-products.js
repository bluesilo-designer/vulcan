/* ============================================================
   v6 PRODUCT PAGES. Content layer + template.

   Sources: the technical overview modules, the module requirement
   workbook (concepts only, never its wording), and public domain
   research on range control, armouries, ammunition accounting,
   RTLS, HUMS, video and access governance.

   Excluded on purpose: the innovation ideas, tender wording,
   programme names, throughput or availability figures.
   Standards are stated as alignment, never certification.
   ============================================================ */
var V6PRODUCT={

rcs:{
  lead:"The control layer of a live firing range. VULCAN plans the session, presents the course of fire, holds the range state and records every shot, so the officer in charge runs the range from one place and the review starts from fact.",
  problem:["A lane goes hot while someone is still downrange","Cease fire depends on reaching one console","A stoppage quietly invalidates a score nobody notices","Firers sit on the wrong lane and scores land on the wrong person","Lanes reset slowly between details and the day runs late","Results are keyed by hand into the training record"],
  mods:[
    {k:"Plan",i:"ph-calendar-check",m:["Session booking against slot inventory","Nominal roll and lane assignment","Mission planning and course of fire builder","Range allocation across lanes and details"]},
    {k:"Prepare",i:"ph-list-checks",m:["Readiness check before the range goes hot","Targetry and effects configuration","Dry run without live rounds","Scenario time compression for rehearsal"]},
    {k:"Conduct",i:"ph-crosshair",m:["Session control: start, pause, resume, end","Range hot and cold as a system state","Emergency stop above all scenario logic","Live monitoring of every lane and firer","Reshoot and stoppage handling, logged with reason"]},
    {k:"Review",i:"ph-film-reel",m:["Event markers on one shared clock","Playback synchronised with shot data","Assessment against the course standard","After-action review and clip export"]},
    {k:"Records",i:"ph-database",m:["Results flow to the training record without re-keying","Data import and export in open formats","Range equipment health handed to PRIMUS"]}
  ],
  flow:[["Book","A detail is booked into a slot with its roll, lanes and course of fire."],["Ready","The readiness check runs. The range cannot go hot until it passes."],["Brief","Firers are confirmed against their lanes on the line."],["Conduct","Targets present to the course. Every shot is scored and shown at once."],["Stop","A cease fire from any control point stops every lane."],["Review","Shots, states and video replay on one clock for the AAR."]],
  out:["Scores reach the firer and the instructor as each shot lands, so nobody walks downrange to check.","The stop sits above scenario logic, so a cease fire from any control point halts every lane.","Every shot, state change and video frame shares one clock, so the review shows what actually happened.","A course of fire is defined once and reused, so every detail runs to the same standard."],
  std:[["IEC 62443","Security for software that controls physical equipment, applied to the range control network"],["Range safety doctrine","Hot and cold states, cease fire by anyone, officer in charge and safety officer roles, modelled on public range safety publications"],["MIL-STD-1472","Human engineering for operator stations and console layout"]]
},

trms:{
  lead:"The planning layer above the range. TRMS turns a training calendar into resourced days: every booking carries its people, instructors, equipment and ammunition, and conflicts surface when someone books, not when units arrive.",
  problem:["Two units booked onto the same range","A booking with no ammunition or instructor behind it","Qualifications lapse without anyone noticing","Rolls kept on paper and reconciled afterwards","Utilisation figures nobody trusts"],
  mods:[
    {k:"Calendar",i:"ph-calendar",m:["Training calendar across ranges and areas","Booking requests with approval workflow","Conflict warnings for safety, schedule and resources"]},
    {k:"Resources",i:"ph-users-three",m:["Instructor and support staff allocation","Equipment and ammunition reserved against each booking","Training packages built from standard tasks"]},
    {k:"People",i:"ph-identification-card",m:["Nominal roll and attendance","Qualification currency with expiry alerts","Individual and unit performance history"]},
    {k:"Reporting",i:"ph-chart-bar",m:["Utilisation and readiness reporting","Audit trail of every approval","Feeds to and from the governance record"]}
  ],
  flow:[["Plan","A unit requests training against the calendar."],["Check","Conflicts and missing resources are flagged before approval."],["Resource","People, instructors, equipment and ammunition are reserved."],["Hand over","The approved session passes to VULCAN for conduct."],["Record","Results return to each person and to the unit history."]],
  out:["Conflicts are flagged at booking time, not on the morning of the shoot.","Each booking carries its own resources, so the day is covered before it starts.","Qualification expiry is visible in advance, not discovered after it lapses.","Results flow from the range into the record without being typed twice."],
  std:[["ISO/IEC 27001","Organisational information security, applied to personnel and training data"],["Personal data protection","Purpose limitation and retention rules for training records"]]
},

ewms:{
  lead:"Serialised custody for every weapon. SENTRAX controls who may take which weapon and when, records every removal and return against a named person, and keeps a weapon that is not fit for firing out of anyone's hands.",
  problem:["A weapon goes missing from a paper log until the end of day count","Out of hours or unauthorised access to the armskote","Keys shared or copied","A weapon reported defective is issued again","A stocktake recorded but never performed","No record of who held a weapon at the moment that mattered"],
  mods:[
    {k:"Access",i:"ph-fingerprint",m:["User authorisation by card, PIN and optional biometrics","Permissions by person, weapon type and time window","Two-person rule, configurable per action"]},
    {k:"Custody",i:"ph-arrows-left-right",m:["Issue and return against a named person and session","Handover and takeover between duty staff","Movement detection with alarm on unauthorised removal","Overdue alerts at the due time"]},
    {k:"Accounting",i:"ph-clipboard-text",m:["Instant serial inventory by RFID read","Storage and issuance records","Immutable, exportable audit trail"]},
    {k:"Serviceability",i:"ph-wrench",m:["Defect reporting and quarantine lockout","Maintenance and repair history per serial","Fit for firing certification before reissue","Equipment recovery and spares"]}
  ],
  flow:[["Authorise","The firer is verified against the roll and their permissions."],["Issue","The locker opens for one serial only. Custody is recorded."],["Bind","The weapon is linked to the person for tracking."],["Return","The serial is read back in. Condition is captured."],["Inventory","A full serial count completes before personnel are released."]],
  out:["Every removal and return is recorded with who, what and when, without anyone writing it down.","The cabinet itself enforces who may take which weapon, and when.","An unreturned weapon raises an alarm at its due time, not at the end of day count.","A weapon flagged defective cannot be issued until it is cleared."],
  std:[["Arms physical security practice","Access lists, key control and serial inventory, modelled on public guidance such as US AR 190-11"],["IEC 62443","Security for software that drives locks and lockers"],["ISO/IEC 27001","Organisational information security for custody records"]]
},

eams:{
  lead:"Ammunition as an accountable consumable. MUNIX issues against an authorised scale, traces each lot to a person and course of fire, and reconciles the return in four terms before anyone leaves.",
  problem:["An issue that does not match the authorisation","Rounds or residue lost between the firing point and turn in","A suspended lot reaching the counter","Accounts drifting from physical stock","A discrepancy nobody owns","Heat degraded stock going unnoticed"],
  mods:[
    {k:"Issue",i:"ph-package",m:["Issue against the scale for each person and course","Lot and batch capture by scan","Blind count verification at the counter","Oldest lot first issue logic"]},
    {k:"Return",i:"ph-arrow-u-down-left",m:["Fired, returned unexpended, residue and unaccounted","Discrepancy workflow with a named owner","Reconciliation before personnel are released"]},
    {k:"Stock",i:"ph-stack",m:["Stock balances and periodic accounts","Storage temperature and humidity per magazine","Serviceability, suspension and restriction by lot"]},
    {k:"Supply",i:"ph-truck",m:["Resupply forecast from scheduled training","Consumption history by course","Audit support and full trail"]}
  ],
  flow:[["Allocate","The session's scale of issue arrives with the booking."],["Issue","Lots are scanned and counted against the allocation."],["Fire","Rounds expended are taken from the range record."],["Return","Unexpended rounds and residue are counted in."],["Reconcile","Four terms must balance. Any gap opens an owned discrepancy."]],
  out:["Every round is traced from lot to person to course of fire.","The return is reconciled before personnel are released, not later.","A suspended lot cannot reach the counter.","Storage conditions become part of the serviceability record.","Forecasts come from scheduled training rather than estimates."],
  std:[["UN IATG 03.10","Inventory management and accounting principles for ammunition"],["UN IATG 07.10 / 07.20","Storage, surveillance and in-service proof concepts"],["Ammunition physical security practice","Modelled on public guidance such as US AR 190-11"]]
},

pwats:{
  lead:"One live picture of people, weapons and ammunition. WARDEN combines precise position with doorway presence, binds each issued item to its holder, and raises a separation as it happens rather than as a finding at end of day.",
  problem:["An item leaves a controlled area unnoticed","A weapon is separated from the person it was issued to","Roll call after an incident is slow or misses someone","An end of day count will not close and nobody can show where the item went","Someone enters a restricted area while the range is hot","Dead tags make the system look healthy while it is blind"],
  mods:[
    {k:"Locate",i:"ph-map-pin",m:["Sub-metre position for people","Layout map with live tracks","Movement history and replay"]},
    {k:"Identify",i:"ph-barcode",m:["Tracking device assignment at issue","Unique identity for weapons and magazines","Presence and passage reads at doorways and racks"]},
    {k:"Guard",i:"ph-shield-warning",m:["Zones with entry and dwell rules","Separation alerts between person and item","Restricted area alerts tied to range state"]},
    {k:"Account",i:"ph-users",m:["Live count by zone against the expected list","Exception list of people not accounted for","Tag battery and anchor health"]}
  ],
  flow:[["Assign","A tag is assigned to the person at registration."],["Bind","Weapon and magazine identities are bound at the counter."],["Track","Position refreshes continuously across the facility."],["Alert","A separation or zone breach alerts while it happens."],["Release","Bindings close at return. The history stays for review."]],
  out:["Every issued item is tied to a person at the counter, so separation is an alert, not a finding.","Doorways read tags without line of sight, so nothing leaves a controlled area without a record.","Roll call is a live count by zone, with exceptions listed.","Every movement is timestamped, so an inquiry replays what happened instead of reconstructing it."],
  std:[["IEEE 802.15.4z","Secure ranging for ultra wideband, which resists distance spoofing"],["ISO/IEC 18000-63","Passive UHF RFID air interface for presence and passage"],["IEC 62443","Security of the tracking network and its integrations"]]
},

hums:{
  lead:"Sustainment from measured condition. PRIMUS watches the health and use of range equipment, predicts what will fail, and turns that into maintenance between sessions instead of breakdowns during them.",
  problem:["A breakdown cancels a session that was fully booked","Calendar maintenance replaces healthy parts and misses failing ones","Availability claims that cannot be evidenced","Faults recur because nobody linked them to usage","Spares run out at the wrong time","A silent sensor is mistaken for a healthy asset"],
  mods:[
    {k:"Monitor",i:"ph-heartbeat",m:["Health display for every connected asset","Usage counted with its operating context","Sensor dropouts made visible"]},
    {k:"Predict",i:"ph-chart-line-up",m:["Trend alerts before a hard limit","Analytical failure prediction","Remaining useful life with a confidence band"]},
    {k:"Maintain",i:"ph-wrench",m:["Condition based maintenance triggers","Work orders raised, assigned, closed and verified","Engineering commands to equipment, under control"]},
    {k:"Plan",i:"ph-package",m:["Spares forecast from predicted failures","Obsolescence tracking across the estate","Availability, MTBF and MTTR from logged events"]}
  ],
  flow:[["Collect","Equipment reports health and use, tagged to the session."],["Trend","Readings are compared with each asset's own history."],["Predict","A developing fault surfaces with its likely component."],["Act","A work order is raised and scheduled between sessions."],["Verify","Post repair readings confirm the fix before release."]],
  out:["Maintenance follows measured condition, not the calendar.","Every reading is stored with how the equipment was used, so a fault traces to its cause.","Availability is calculated from logged events, so the operator and the owner see the same number.","Developing faults are visible early, so repairs happen between sessions."],
  std:[["ISO 55001","Asset management system requirements"],["ISO 17359 / ISO 13374","Condition monitoring programme and data processing architecture"],["ISO 13381-1","Prognostics guidance"],["IEC 60812","FMEA and FMECA for choosing what to monitor"]]
},

vms:{
  lead:"Training video that is synchronised, searchable and trusted. ACCEL, our partner's platform, records every lane and position, and Blue Silo integrates it with range control so footage and shot data share one clock.",
  problem:["Footage missing for the critical minutes","Investigators aligning unsynchronised clips by hand","Exports nobody can prove are authentic","A camera brand change forcing a platform replacement"],
  mods:[
    {k:"Record",i:"ph-record",m:["Continuous recording around the clock","Adaptive quality per stream","Time and location tagging on every frame","Failover recording"]},
    {k:"Review",i:"ph-play",m:["Synchronised multi camera playback","Starred clips and markers from range events","Image enhancement for review"]},
    {k:"Export",i:"ph-export",m:["Clip export with metadata","Signed exports and export log","Role based viewing and export rights"]}
  ],
  flow:[["Record","Every lane records continuously."],["Mark","Range events place markers on the shared timeline."],["Review","Instructors scrub once and every view follows."],["Export","Clips leave with their metadata and a handling log."]],
  out:["Every camera plays back on one clock, so an incident is reviewed from every angle at once.","Range events mark the footage, so review jumps straight to the shot that matters.","Each export carries its own handling log, so its integrity can be shown later."],
  std:[["ONVIF Profiles S, T, G, M","Interoperable streaming, recording and analytics metadata"],["IEC 62676","Video surveillance system practice"],["Personal data protection","Retention limits and access control over footage"]]
},

eva:{
  lead:"Analytics that act while the event is happening. ACCEL edge analytics, from our partner, watch the perimeter and approaches beside the camera, so an alert reaches an operator in time to matter, even if the uplink is down.",
  problem:["An intrusion found on the recording the next morning","Alarm fatigue until operators switch analytics off","Analytics that stop when the link to the server fails","Unattended items noticed too late"],
  mods:[
    {k:"Perimeter",i:"ph-scan",m:["Intrusion and line crossing","Human presence outside operating hours","Loitering by dwell time"]},
    {k:"Safety",i:"ph-fire",m:["Smoke and fire detection","Crowd density","Person in a restricted area"]},
    {k:"Objects",i:"ph-suitcase",m:["Unattended baggage","Unattended vehicles","Re-identification across cameras"]},
    {k:"Operate",i:"ph-bell",m:["Operator acknowledgement and classification","Masking zones and suppression schedules","Classifications fed back into tuning"]}
  ],
  flow:[["Detect","Inference runs at the edge, beside the camera."],["Alert","The operator receives the event with its clip."],["Classify","True or nuisance, recorded by the operator."],["Tune","Classifications refine rules and thresholds."]],
  out:["Analytics run beside the camera, so the alert arrives during the incident.","Detection continues when the uplink is lost.","Operators classify every alarm, and that is what tunes the rules."],
  std:[["ONVIF Profile M","Analytics metadata and event streaming"],["IEC 62443","Security for edge devices and their network"],["Personal data protection","Purpose limitation and retention for analytics data"]]
},

as:{
  lead:"Governance for everyone who enters. AXIOM clears visits before arrival, confirms identity at the gate, issues access that expires on its own, and keeps one record of who approved, who entered and who is on site now.",
  problem:["Queues at the gate because nobody was cleared in advance","Temporary credentials that never expire","Paper logbooks that cannot answer who is on site during an evacuation","Identity data copied and kept indefinitely","Approvals given by message with no record"],
  mods:[
    {k:"Before arrival",i:"ph-calendar-plus",m:["Visit pre-registration by a host","Approval workflow with separation of duties","Vehicle pre-clearance by plate"]},
    {k:"At arrival",i:"ph-identification-badge",m:["Self service registration","Identity confirmed against the pre-registration","Time bounded credentials issued to access control"]},
    {k:"On site",i:"ph-users-four",m:["Escort and host notification","Live headcount for muster","Automatic revocation at expiry or checkout"]},
    {k:"After",i:"ph-chat-centered-text",m:["Feedback capture","Audit trail of request, approval, entry and exit","Retention and purge on schedule"]}
  ],
  flow:[["Request","A host registers the visit and its purpose."],["Approve","A separate approver clears it before arrival."],["Arrive","Identity is confirmed. Access is issued with an expiry."],["On site","Every entry and exit updates the headcount."],["Leave","Access ends on its own. The record is kept, then purged."]],
  out:["Clearance happens before arrival, so the gate only confirms identity.","Every temporary credential carries its own expiry.","The same record answers who approved, who entered and who is on site now.","Visitor data is kept only for its stated purpose and purged on schedule."],
  std:[["NIST SP 800-53","Access control, identification, audit and visitor records controls"],["ISO/IEC 27001","Physical entry controls and access rights management"],["PDPA","Consent, purpose limitation and retention for personal data"],["WCAG 2.2","Accessibility of portals and kiosks"]]
}
};

/* ---------------- template ---------------- */
pProduct=function(id){
  var p=v6p(id), b=V6BRAND[id], c=V6PRODUCT[id];
  if(!p||!b||!c) return pProducts();
  var n2=function(i){return ('0'+(i+1)).slice(-2);};
  var mini=CHAIN.map(function(x){return '<i class="'+(p.on.indexOf(x.k)>-1?'on':'')+'">'+x.k+'</i>';}).join('');
  var rel=(p.rel||[]).map(function(r){
    var q=v6p(r), qb=V6BRAND[r]; if(!q||!qb) return '';
    return '<a href="#/products/'+r+'"><span class="reg__a">'+(qb.brand||qb.acr)+'</span><span class="reg__n">'+qb.sys+'</span>'+
      '<span class="reg__r">'+q.role+'</span><span class="reg__g">'+qb.acr+'</span></a>';}).join('');

  return '<div class="shell"><div class="pmast">'+
    '<div class="rv"><div class="v6pbrand">'+(b.brand?'<span class="v6pbrand__b">'+b.brand+'</span>':'')+
      '<span class="v6pbrand__s">'+b.acr+'</span>'+(b.partner?'<span class="v6pbrand__p">Partner product, '+b.partner+'</span>':'')+'</div>'+
      '<h1>'+b.sys+'</h1><p class="lead">'+c.lead+'</p></div>'+
    '<dl class="pcard rv" data-d="1">'+
      '<div class="prow"><dt>Role</dt><dd>'+p.role+'</dd></div>'+
      '<div class="prow"><dt>Used by</dt><dd>'+p.users.join(', ')+'</dd></div>'+
      '<div class="prow"><dt>Deployed at</dt><dd>'+p.where+'</dd></div>'+
      '<div class="prow"><dt>In the chain</dt><dd><span class="mini">'+mini+'</span></dd></div>'+
      '<div class="prow"><dt>Modules</dt><dd>'+c.mods.reduce(function(a,m){return a+m.m.length;},0)+' across '+c.mods.length+' areas</dd></div>'+
    '</dl></div></div>'+

  band({deep:true,title:"What goes wrong without it",intro:"The failures this system exists to prevent, written the way they happen on a range.",
    body:'<ol class="v6pp rv">'+c.problem.map(function(x,i){return '<li><span>'+n2(i)+'</span>'+x+'</li>';}).join('')+'</ol>'})+

  band({title:"Modules",intro:"Grouped by the moment they serve.",
    body:'<div class="v6pm rv">'+c.mods.map(function(m){
      return '<div class="v6pm__g"><h3><i class="ph '+m.i+'" aria-hidden="true"></i>'+m.k+'</h3><ul>'+
        m.m.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div>';}).join('')+'</div>'})+

  band({deep:true,body:'<div class="split"><div class="rv">'+media(p.media)+'</div>'+
    '<div class="rv" data-d="1"><h2>How it runs</h2><ol class="v6pf">'+c.flow.map(function(f,i){
      return '<li><span>'+n2(i)+'</span><div><b>'+f[0]+'</b><p>'+f[1]+'</p></div></li>';}).join('')+'</ol></div></div>'})+

  band({title:"What changes",body:'<div class="v6po rv">'+c.out.map(function(x){return '<p>'+x+'</p>';}).join('')+'</div>'})+

  band({deep:true,title:"Standards we design to",intro:"Stated as alignment. Blue Silo does not claim certification against these.",
    body: tbl(["Reference","What it governs here"],c.std)})+

  band({title:"What it talks to",intro:"Counterpart classes, not vendor product names.",
    body: tbl(["Counterpart class","Direction","Trigger"],p.ifc.map(function(r){return [r[0],'<span class="arrow">'+r[1]+'</span>',r[2]];}))})+

  band({deep:true,body:'<div class="decide rv"><span>Dependencies and assumptions</span><p>'+v6acr(p.dep||'Requires the personnel master record and the range calendar owner to be agreed before go-live.')+'</p></div>'})+

  (rel?band({tight:true,title:"Works with",body:'<div class="reg rv">'+rel+'</div>'}):'')+
  closer();
};
