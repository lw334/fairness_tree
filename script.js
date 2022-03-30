var margin = {
    top: 20,
    right: 120,
    bottom: 20,
    left: 120
},
width = 960 - margin.right - margin.left,
height = 800 - margin.top - margin.bottom;

var root =
    {
        "name": "Do you want to be fair by focusing on allocating interventions", "rule": "null", 
        "left_link_explanation": "This means that you want to be fair by ensuring that groups are represented similarly in your selection \
        regardless of whether the intervention is approripate for them or not. Here are three examples of what this principal may look like \
        when applied. (1) If you’re interviewing people for a job, you might want to have candidates in your applicant pool or selected for \
        your interview stage from different racial groups or gender identities. It’s important to note that this does not enforce any criteria\
         for how qualified the candidate should be for the job you’re interviewing them for. (2) The Rooney Rule, adopted in 2003, is an NFL \
            policy requiring every team with a head coaching vacancy to interview at least one or more diverse candidates. \
        The goal of the policy is to ensure that minority coaches, especially African Americans, would be considered for high-level \
         coaching positions. (3) Equal Employment Opportunity Commission states that \"selection rate for any race, sex, or ethnic group \
         which is less than four-fifths (or 80%) of the rate for the group with the highest rate will generally be regarded by \
         the Federal enforcement agencies as evidence of adverse impact, while a greater than four-fifths rate will generally not be \
         regarded by Federal enforcement agencies as evidence of adverse impact.\" (4) Specific instances of affirmative action can fall \
         into this setting where there are quotas for people admitted to universities or elected to political office \
         or on boards for publicly listed companies from specific groups (based on race, gender for example). ", 
        
        "right_link_explanation": "States such as New Jersey and Kentucky have at one point or are currently using algorithmic risk assessment tools in their criminal justice systems. \
        If you have a set of individuals being evaluated for bail, you do not want to deny bail to individuals who are not a flight risk. \
        Secondly, you do not want to disproportionately deny bail to black individuals who are not a flight risk compared to white individuals who are not a flight risk. \
        If you have a limited number of available spots for organ transplants, you do not want to disproportionately exclude people without access to high quality hospitals \
        who can benefit from the transplant, compared to people who do have access to these hospitals and can benefit from the transplant. \
        In maternity care, physicians sometimes use Vaginal Birth After Cesarean (VBAC) calculator, which estimates success rates for vaginal birth among pregnant \
        people with a previous cesarean delivery. You want to be fair by ensuring that black women with equal likelihood of having a successful delivery as white women \
        are not denied the opportunity.",
        "children": [
          {
              "name": "How would to like to select from each group?", "rule": "To include people from different protected groups, regardless of whether the intervention is appropriate for them or not", 
              "node_explanation": "null", "link_explanation": "example", 
              "children": [
               {
                    "name": "the Roney rule", "rule":"a minimum number of people",
                    
                },
                {
                    "name": "equal selection parity", "rule": "an equal number of people",
                    
                },
                {
                    "name": "demogrphic parity", "rule": "at a rate proportional to the group's percentage in the overall population",
                    
                }
              ]
          },
        {
              "name": "Do you believe that \"ground truth\" outcomes you are using to determine \"appropriateness\" are good enough?", 
              "rule":"To include people for whom interventions are appropriate, while taking into account their membership in protected groups",
              "children": [
                {
                    "name": "Do you believe that the benefits of the intervention generally outweigh its negative (if any) impact on the recipients?", "rule": "Yes",
                     "children": [

                     {"name":"Can you intervene a large or a small fraction of the people", "rule": "Yes", "children":
                        [
                            {"name": "Recall (True positives Rate) Parity", "rule":"small"},
                            {"name": "Among which group are you most concerned with ensuring predictive parity",
                             "rule":"big", 
                             "children": [ {"name": "False Negative Parity", "rule":"everyone without regard to actual need"},
                         {"name": "False Omission Parity", "rule":"people not receiving assistance"},
                          {"name": "False Negative", "rule":"people with needs"}]}
                        ]},
                     {"name":"You may choose to focus on",
                      "rule": "No", "children": 
                        [ 
                        {"name": "False Positive Count Disparity", "rule":"number of people who are positive across groups"},
                        {"name": "False Positive Proportion Parity", "rule":"the proportion of people from the group(s) that are false positives"},
                        {"name": "False Discovery Parity", "rule":"the proportion of people who are selected for the intervention and who are false positives"},
                        {"name": "False Positive Rate", "rule":"the proportion of people who are not appropriate for the intervention but who may be false positive"}]
                    }
                     ]
                },
                {
                     "name": "counterfactual fairness", "rule": "No"
                }
              ]
          }
        ]
    };

function wrap_node(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy"))/2,
        tspan = text.text(null).append("tspan").attr("x", 30).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 30).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}


function wrap_link(text, width) {
  text.each(function() {
    var text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1 // ems
      y = text.attr("y"),
      dy = parseFloat(text.attr("dy")),
      tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineHeight + "em").text(word);
      }
    }
  });
}

function mouseover(d) {
    d3.select(this).append("text")
        .attr("class", "hover")
        .attr('transform', function(d){ 
            return 'translate(5, -10)';
        });
}

// Toggle children on click.
function mouseout(d) {
    d3.select(this).select("text.hover").remove();
}


function mouseover_link(d) {
    //console.log('on top of the link');
    d3.select(this).style('fill', 'blue').style('font-size', 12);
}

function mouseout_link(d) {
    //console.log('leave link');
    d3.select(this).style('fill', '#CC0000').style('font-size', 10);
}



var i = 0,
    duration = 750,
    rectW = 60,
    rectH = 30;

var tree = d3.layout.tree().nodeSize([300, 80]);
var diagonal = d3.svg.diagonal().projection(function (d) { return [d.x, d.y]; });

var svg = d3.select("#tree").append("svg").attr("width", 800).attr("height", 1000)
    .call(zm = d3.behavior.zoom().scaleExtent([1,3]).on("zoom", redraw)).append("g")
    .attr("transform", "translate(" + 350 + "," + 20 + ")");

//necessary so that zoom knows where to zoom and unzoom from
zm.translate([350, 20]);

root.x0 = 0;
root.y0 = height / 2;

function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

root.children.forEach(collapse);
update(root);

d3.select("#body").style("height", "800px");

function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
        d.y = d.depth * 250;
    });

    // Update the nodes…
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) {
        return d.id || (d.id = ++i);
    });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("id", function(d) {  return d.id || (d.id = ++i);})
        .attr("transform", function (d) {
        return "translate(" + source.x0 + "," + source.y0 + ")";
    })
        .on("click", click);

    nodeEnter.append("circle")
             .attr("r", 10)
             .attr("stroke", function (d) { return d.children || d._children ? "steelblue" : "#00c13f"; })
             .style("fill", function (d) { return d.children || d._children ? "lightsteelblue" : "#fff"; });

  
    nodeEnter.append("text")
            .attr("y", function (d) {
                return d.children || d._children ? -18 : 18;
            })
            .attr("dy", "-1em")
            .attr("text-anchor", "left")
            .text(function (d) { return d.name; })
            .on("mouseover", mouseover)
            .on("mouseout", mouseout)
            .style("fill-opacity", 1e-6)
            //.on("click", click_nodetext)
            .call(wrap_node, 200);

    // Transition nodes to their new position.
     var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
        nodeUpdate.select("circle")
            .attr("r", 10)
            .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
        nodeUpdate.select("text")
            .style("fill-opacity", 1)
            // Update the link text         



        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function (d) { return "translate(" + source.x + "," + source.y + ")"; })
            .remove();
        nodeExit.select("circle")
            .attr("r", 1e-6);
        nodeExit.select("text")
            .style("fill-opacity", 1e-6);

    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function (d) {
        return d.target.id;
    });

 

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
        var o = {
            x: source.x0,
            y: source.y0
        };
        return diagonal({
            source: o,
            target: o
        });
    });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);


    // linktext
   var linktext = svg.selectAll("g.link")
                    .data(links, function(d) {
                      return d.target.id;
                    });
                  linktext.enter()
                    .insert("g")
                    .attr("class", "link")
                    .append("text")
                    .attr("dy", "1em")
                    .attr("text-anchor", "middle")
                    .text(function(d) {
                      //console.log(d.target.name);
                      return d.target.rule;
                    })
                    .on("mouseover", mouseover_link)
                    .on("mouseout", mouseout_link)
                    .on("click", click_linktext)
                    .call(wrap_link,100);

                  linktext.transition()
                    .duration(duration)
                    .attr("transform", function(d) {
                      return "translate(" + ((d.source.x + d.target.x) / 2) + "," + ((d.source.y + d.target.y) / 2) + ")";
                    })

                  //Transition exiting link text to the parent's new position.
                  linktext.exit().transition()
                    .remove();

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
        var o = {
            x: source.x,
            y: source.y
        };
        return diagonal({
            source: o,
            target: o
        });
    })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });

// var zoomfactor = 1;

// var zoomlistener = d3.behavior.zoom()
// .on("zoom", redraw);

// d3.select("#zoomin").on("click", function (){
//     console.log('zoomin');
//     zoomfactor = zoomfactor + 0.2;
//     zoomlistener.scale(zoomfactor).event(d3.select("#tree"));
// });

// d3.select("#zoomout").on("click", function (){
//     zoomfactor = zoomfactor - 0.2;
//     zoomlistener.scale(zoomfactor).event(d3.select("#tree"));
// });

    
}



function zoomed() {
    g.attr("transform", d3.event.transform);
}

// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }


    update(d);

}

// update explanation on click.
function click_linktext(d) {
    var update_txt = "";
    if (d.target.id % 2) {
        update_txt = d.source.right_link_explanation;
    } else {
        update_txt = d.source.left_link_explanation;
    }
    d3.select("#explanation")
        .text(update_txt);
}




//Redraw for zoom
function redraw() {
  //console.log("here", d3.event.translate, d3.event.scale);
  svg.attr("transform",
      "translate(" + d3.event.translate + ")"
      + " scale(" + d3.event.scale + ")");
}
