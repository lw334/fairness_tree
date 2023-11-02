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
        "left_link_explanation": "This means that you want to be fair by ensuring that groups are represented similarly in your selection regardless of whether the intervention is appropriate for them or not. Here are four examples of what this principal may look like when applied. \n\t (1) If you’re interviewing people for a job, you might want to have candidates in your applicant pool or selected for your interview stage from different racial groups or gender identities. It’s important to note that this does not enforce any criteria for how qualified the candidate should be for the job you’re interviewing them for. \n\t (2) The Rooney Rule, adopted in 2003, is an NFL policy requiring every team with a head coaching vacancy to interview at least one or more diverse candidates. The goal of the policy is to ensure that minority coaches, especially African Americans, would be considered for high-level coaching positions. \n\t (3) Equal Employment Opportunity Commission states that \"selection rate for any race, sex, or ethnic group which is less than four-fifths (or 80%) of the rate for the group with the highest rate will generally be regarded by the Federal enforcement agencies as evidence of adverse impact, while a greater than four-fifths rate will generally not be regarded by Federal enforcement agencies as evidence of adverse impact.\" \n\t(4) Specific instances of affirmative action can fall into this setting where there are quotas for people admitted to universities or elected to political office or on boards for publicly listed companies from specific groups (based on race, gender for example). ", 

        "right_link_explanation": "This means that you want to first and foremost focus on providing interventions to people for whom the interventions are appropriate (eg. people who should be eligible for the services or are most likely to benefit from them). However, you want to do so while taking into account their group membership such as gender, race, age and so on. Here are three examples of what this concern might look like in reality: \n\t (1) States such as New Jersey and Kentucky have at one point or are currently using algorithmic risk assessment tools in their criminal justice systems. If you have a set of individuals being evaluated for bail, you do not want to deny bail to individuals who are not a flight risk. Secondly, you do not want to disproportionately deny bail to black individuals who are not a flight risk compared to white individuals who are not a flight risk. \n\t (2) If you have a limited number of available spots for organ transplants, you do not want to disproportionately exclude people without access to high quality hospitals who can benefit from the transplant, compared to people who do have access to these hospitals and can benefit from the transplant. \n\t (3) In maternity care, physicians sometimes use Vaginal Birth After Cesarean (VBAC) calculator, which estimates success rates for vaginal birth among pregnant people with a previous cesarean delivery. You want to be fair by ensuring that black women with equal likelihood of having a successful delivery as white women are not denied the opportunity.",
        "children": [
          {
              "name": "How would to like to select from each group?", "rule": "To include people from different protected groups, regardless of whether the intervention is appropriate for them or not", 
              "left_link_explanation": "You want to ensure you select at least a minimum number of people from each group.", 
              "right_link_explanation": "You want to select at a rate that's proportional to the group's percentage in the overall population.", 
              "middle_link_explanation": "You want to select the same number of people from each group.", 
               "children": [
               {
                    "name": "the Roney rule", "rule":"a minimum number of people", 
                    "node_explanation": "According to the Roney rule, you want to ensure you select at least a minimum number of people from each group. Here we provide one hypothetical example as well as two case studies. \n\n Hypothetical example: \n\t For example, you are hiring for a position. You received 10 applications from male applicants and 20 applications from female applicants. You want to ensure that you interview 5 male applicants and at least 1 or more female applicants for this position. By this notion of fairness, you will choose to interview 5 male applicants and at least 1 female applicant.\n\n Case Studies: \n\t (1)The Rooney Rule, adopted in 2003, is an NFL policy requiring every team with a head coaching vacancy to interview at least one or more diverse candidates. The goal of the policy is to ensure that minority coaches, especially African Americans, would be considered for high-level coaching positions. \n\t (2)HUD vs Facebook can be viewed as a violation of this rule. The Fair Housing Act states that housing advertisers must not be allowed or encouraged to exclude protected groups from their advertising efforts. In 2019, Department of Housing and Urban Development sued social media giant Facebook for allegedly violating the Fair Housing Act. HUD alleged that Facebook allowed advertisers certain tools on their advertising platform that could exclude people who were classified as \"non-American-born,\" \"non-Christian\" or \"interested in Hispanic culture\" among other things. It also said advertisers could exclude people based on ZIP code, essentially \"drawing a red line around those neighborhoods on a map.\" As a result, the company removed 5,000 specific targeting options. In this case, no one from the excluded group could view a rental/sale listing, violating the Rooney rule that a minimum number of people from each group (based on race, religion and so on) should be able to view the listings." 
                    
                },
                {
                    "name": "equal selection parity", "rule": "an equal number of people", "node_explanation": "According to equal selection parity, you want to select the same number of people from each group. Here we provide one hypothetical example as well as a case study. \n\nHypothetical example: \n\t For example, you are hiring for a position. You received 10 applications from male applicants and 20 applications from female applicants. You want to ensure that you interview the same number of male and female candidates. By this notion of fairness, you will choose to interview 5 male applicants and 5 female applicants. \n\n Case Studies: \n\t In October 2018, California passed Senate Bill 826, mandating gender diversity on the boards of public companies headquartered in California. The bill set deadlines in 2019 (for two women on five-person boards) and 2021 (for three women on seven-person boards). The ratio is close to having half female representation on board. In reality, reserving a certain number of people from each group to receive decisions can result in a quota system. However, when the quota is disproportionately favoring one group than another regardless of the candidates’ qualification, it can violate existing laws. For example, Regents of the University of California v. Bakke in 1978 has ruled that using quota in high education admission for affirmative action is unconstitutional. Similarly, the California Senate Bill 826 is expected to be challenged as unconstitutional on the grounds of violating equal protection as well. \n\t However, the legal contexts may differ and should not preclude you from using this fairness metric. For example, many countries including Norway, Belgium, France, Germany, Iceland, India, Israel, Italy, Norway, Pakistan, and Spain all have some form of legislated quota for female representation on corporate boards." 
                    
                },
                {
                    "name": "demogrphic parity", "rule": "at a rate proportional to the group's percentage in the overall population","node_explanation": "According to demographic parity, you want to select at a rate that's proportional to the group's percentage in the overall population. Here we provide one hypothetical example as well as three case studies. \n\n Hypothetical example: \n\t For example, you are hiring for a position. You received 10 applications from male applicants and 20 applications from female applicants. You want to ensure that you interview 40% of the male applicants and 40% of the female candidates. By this notion of fairness, you will choose to interview 4 male applicants and 8 female applicants. Notice how different from equal selection parity, this fairness metric can result in different numbers of applicants from each group, but the difference is proportional to how large each group is. \n\n Case Studies: \n\t (1) Equal Employment Opportunity Commission has imposed a rule of thumb test for discrimination based on selection rate. According to EEOC, “a selection rate for any race, sex, or ethnic group which is less than four-fifths (or 80%) of the rate for the group with the highest rate will generally be regarded by the Federal enforcement agencies as evidence of [discrimination].” \n\t (2) Similarly, the Texas state universities also use an equal selection rate across all the Texan high schools for admissions, regardless of the rankings of the high schools. The \"Top 10% Rule\" in Texas passed in 1997 grants Texas students who graduated in the top ten percent of their high school class automatic admission to all state-funded universities, regardless of the ranking of the high school.The notion of protected group here maps to each high school and getting representation from each high school. Although there are additional nuanced procedures associated with the admission process, this is a crucial step that augments the rest of the process. \n\t (3) Lastly, another important field where equal selection rate may apply is fair advertising. According to research by Ali and colleagues (2019),  users who were shown a job posting on Facebook for a position as a lumberjack were more than 90% men and more than 70% white, while those seeing a posting for a janitorial position were over 75% women and 65% black. To achieve fair representation, Facebook may need to adjust the rate so that is the same across gender and racial groups. "
                    
                }
              ]
          },
        {
              "name": "Do you believe that \"ground truth\" outcomes you are using to determine \"appropriateness\" are good enough?", "node_explanation": " \"ground truth\" outcome means the outcome in reality, not the outcome of your predictions. Notice that you may sometimes not have the \"ground truth\" either because you are missing data or you have biased outcome for a particular group. You sometimes may not observe the \"ground truth\" because the outcome may be contingent upon your action. For example, you may only know if a restaurant is violating health regulation only if you inspect it. Please click the yes and no below for more examples and detailed explanations about how to proceed.",
              "rule":"To include people for whom interventions are appropriate, while taking into account their membership in protected groups", 
              "left_link_explanation": "You may want to answer NO if because of the process used to get outcomes or data on outcomes, 1) you only have outcomes for some groups but not others , or 2) you have biased outcomes for some particular groups. More specifically, you may encounter any of the following situations: \n\t (1) The dataset is missing labels (outcomes) disproportionately for a group (noisy label) You are missing labels because only certain types of groups were present in your data. \n\t Case Study: During Covid, many local governments need to measure economic hardship in their jurisdiction. They use unemployment insurance data to infer the total number of unemployed individuals. However, the unemployment insurance data only captures individuals who are eligible for it, and misses a large sector of workers who are independent contractors or gig workers that are not covered by unemployment insurance. \n\t (2) You are missing labels because only certain types of groups were labeled or were labeled at a much higher rate than other groups. \n\t Case Study: This will be generally true for complaint-based investigations of any time. For example, in child welfare, because investigations are often triggered by phone reports, and poor families are more likely to be reported via the phone hotline, they end up getting investigated more often and have more labeled outcomes than wealthy families. Similarly, study has shown that the FDA’s current regulatory structure fails to account for cultural nuances in ethnic cuisine, allowing implicit bias to creep into inspection results and consumer opinion. As a result, ethnic restaurants may be more likely to be inspected and labeled as violating the health code in the data. Risk assessment tools built on such data will likely embody the existing biases. \n\t (3) You only have labels  for people who received your intervention (selective label) \n\t Case Study: \n\t (a) You are a judge deciding if you want to release someone from jail while they await a trial based on their risk of not showing up for the trial. However, historically you only have data on if someone shows up or not if you release them. In this case, whether you observe the outcome of showing up or not is contingent upon your intervention of release. \n\t (b)You are a doctor deciding if you want to assign a particular examination to someone based on their risk of having breast cancer. However, historically you only have data on if someone has breast cancer or not if you assign them the examination. In this case, whether you observe the outcome of having breast cancer or not is contingent upon your intervention of assigning the examination. \n\t (3) Labels are wrong disproportionately for a group (biased label) \n\t Case Study: \n\t (a) In predicting police misconduct, whether a conduct constitutes misconduct is sometimes determined by an internal group at the police department. Questioning of officers can sometimes be structured to elicit favorable statements from them, resulting in wrong labels (misconduct is categorized a non-misconduct). \n\t (b) In predicting some medical diagnoses such as skin cancer, black patients often have different symptoms than white patients. Subsequently, black patients have a higher chance of being misdiagnosed (skin cancer is categorized as another type of disease).\n\t (c) In the US, some hospitals use a commercial algorithm to decide which patients should be placed in “high-risk care management” programs. However, instead of using actual medical needs, the algorithm uses healthcare utilization particularly the cost spent as a proxy for need. Because less money is spent on Black patients who have the same level of need, and the algorithm falsely concludes that Black patients are healthier than equally sick White patients.",
              "right_link_explanation": "You believe that \"ground truth\" outcomes you are using may not be perfect. However, you have a good understanding of why they may not be \"appropriate\". In general, you believe the benefit of making data-informed decisions will outweigh potential drawbacks and you have sufficient understandings or protocols that can help mitigate these drawbacks in making decisions.",
              "children": [
                {
                    "name": "Do you believe that the benefits of the intervention generally outweigh its negative (if any) impact on the recipients?", "rule": "Yes", 
                    "node_explanation": "To answer this question, you may consider the following questions: \n\t What are the criteria for determining costs and benefits? The costs and benefits may be monetary, psychological, social (impacting others) and so on. \n\t From whose point of view are you considering the costs and benefits? \n\t The individual directly affected? The community that the individual is in? Society at large? \n\t To your organizations providing the intervention How do you compare the short-term vs the long-term costs and benefits? \n\n Case Studies: \n\t (1) For example, placing someone in jail is generally punitive to the individual whereas providing someone with social services is likely assistive. \n\t (2) In some cases,the intervention can be both assistive and punitive to different stakeholders: A restaurant inspection can be punitive to the restaurant owner and workers and assistive to the consumers of the food at that restaurant.A child welfare investigation can be punitive to the parent(s)/guardian(s) and assistive to the child. A suicide prevention program can be assistantive to the individual; However, it may require physically constraining the person in a facility which they may consider as harmful. In these situations, we need to carefully understand these perspectives and determine the objective to match our policy and societal goals. \n\t (3) In some cases, we might combine these into a single objective and in other cases, we might decide to prioritize one of them. Referring back to How to use it, you may conduct the exercises several times taking different perspectives if you believe the cost-benefits analysis for your program is complicated and can vary from case to case.", 
                     // "left_link_explanation":"I believe the benefits of the intervention generally outweigh its negative impact on the recipients.",
                     // "right_link_explanation": "I believe the negative impact of the intervention generally outweigh its benefits on the recipients.", 
                     "children": [
                     {"name":"Does your resource capacity allow you to provide the intervention to most or only a small fraction of the people in need?", "rule": "Yes",   
                     //  "left_link_explanation":"I have the resources and budget to intervene a large fraction of the people",
                     // "right_link_explanation": "I have the recources and budget to intervene a small fraction of the people", 
                     "node_explanation": "Because predictions are not always correct, when your predictions indicate some people as high risk and require intervention, there will sometimes be a subset of them who in fact do not need the intervention. Similarly, when your predictions indicate to exclude some people, some of them should in fact receive the intervention. \n\n Because the intervention is considered assistantive, we generally consider the benefit to the individual receiving the intervention is higher than the cost had they received it when they had no need for the intervention. \n\n In this case, we want to mainly reduce false negative errors – wrongfully predict someone as not needing intervention when they do need it. An example for this is when providing housing assistance. Here, a positive prediction outcome is when you predict someone as having a high risk of becoming homeless, and therefore should receive housing assistance. Housing assistance can be rapid housing, housing vouchers, and so on, that makes it an assistantive intervention. So we want to minimize the false negative error of leaving someone out of assistance when they need it. \n\n All the following metrics focus on reducing such false negative errors. However, being fair in this process can happen in a few different ways depending on your policy objectives.", 
                     "children":
                        [
                            {"name": "Recall (True positives Rate) Parity aks “Equal Opportunity”", "rule":"small", 
                            "node_explanation":"Because the intervention is assistantive, you want to distribute it to people who have an actual need. This notion of fairness focuses on the proportion of people who in fact have such a need and how well does the algorithmic assessment tool identify people with true needs. Since you can only provide assistance to a small fraction of the people in need, you should attempt to ensure that it is distributed in a representative way. By choosing this metric, you ensure all groups have the same true positive rate. This means that if x% of all the people in the protected group who in fact need assistance are predicted to need assistance, then the rate is the same across all groups. This metric of fairness is exactly what we mean colloquially by “equal opportunity.” In employment or school admission, this metric asks: what are your chances of being selected for an interview given that you are a qualified candidate, based on your race?"},
                            {"name": "Among which group are you most concerned with ensuring predictive equity?",
                            "node_explanation": "Because the intervention is considered assistantive, we generally consider the benefit to the individual receiving the intervention is higher than the cost had they received it when they had no need for the intervention. \n\n In this case, we want to mainly reduce false negative errors – wrongfully predict someone as not needing intervention when they do need it. An example for this is when providing housing assistance. Here, a positive prediction outcome is when you predict someone as having a high risk of becoming homeless, and therefore should receive housing assistance. Housing assistance can be rapid housing, housing vouchers, and so on, that makes it an assistantive intervention. So we want to minimize the false negative error of leaving someone out of assistance when they need it. \n\n All the following metrics focus on reducing such false negative errors. However, being fair in this process can happen in a few different ways depending on your policy objectives.",
                            "left_link_explanation":"Here, we are concerned with statements like “twice as many people from Group A were wrongly denied the services as from Group B.” However, a statement like this is only problematic if the two groups are of roughly the same size which is often not the case.", 
                            "middle_link_explanation": "Here, you are concerned with statements like “90% of people from Group A were wrongly denied the services compared to only 10% of people from Group B.”", 
                            "middle_right_link_explanation": "Here, we are concerned with statements like “90% of the people who are denied assistance in fact do need assistance in group A, compared to only 10% of people who are wrongfully denied services in group B.”",
                            "right_link_explanation": "Here, we are concerned with statements like “90% of the people who actually need housing assistance in group A are denied housing, compared to only 10% of people who actually need housing assistance in group B.”", 
                             "rule":"big", 
                             "children": [ 
                                {"name": "False Negative Count Parity #FN", "rule":"the counts of false negative errors across groups", 
                                "node_explanation": "The metric we use here is False Negative Count Parity. By choosing this, you want to ensure that the number of people who are false negative is the same across all groups. \n\n While we don’t believe that there are a significant number of real-world cases where this property may be desired, we include it here for the sake of completeness."},
                                {"name": "False Negative Proportion Parity FN/N", "rule":"the proportion of people from the group(s) that are false negatives", 
                                "node_explanation":"The metric we use here is False Negative Proportion Parity. By choosing this, you want to ensure that for everyone, their chances of not being selected for receiving the services when they in fact need it, is the same across all racial groups. For example, you would be wrong about 10 people for a group that’s 100k and 100 people for a group that has a 1M population.\n\n Case study (You may be concerned about the following questions) : \n\t What are your chances of being denied housing assistance when you need it solely on your race? \n\t What are your chances of being wrongly rejected from a job when you are qualified given your gender? \n\n The metrics we use here is False Negative Proportion Disparity. It is the number of false negatives divided by the total size of each group of interest. By ensuring that the proportion of false negative error mistakes is the same across all groups, we ensure that the tool is not withholding an individual from the assistantive intervention at a higher rate when such intervention is beneficial, solely because they are from a certain group."},
                                {"name": "False Omission Parity FN/(TN+FN)", "rule":"the proportion of people who the model predicts should not receive the intervention from each group and who are false negatives", 
                                "node_explanation":"The metric we use here is False Omission Parity. By choosing this, you want to ensure that for people who the model predicts as not appropriate for receiving services, their chances of being wrongfully denied the services when they in fact could benefit from the services, is the same across all groups. \n\n Case Study (You may be concerned about the following questions): \n\t (a) Among people who the model predicts to not need assistance, what are the chances they had the need given their gender? \n\t (b) Among the people who are predicted to not need housing assistance, what are the chances they actually need it? \n\t (3) Among the people who the model predicts should not be offered the job, what are the chances they in fact are qualified? "},
                                {"name": "False Negative Rate parity  FN/(TP + FN) ", "rule":"the same proportion of people who are appropriate for the intervention but who may be false negatives", 
                                "node_explanation":"The metrics we use here is False Negative Rate parity. This means that for people for whom the services are appropriate, the chances of them being wrongly denied the services is the same across groups. By choosing this, you want to ensure the model’s predictions guarantee a certain level of protection for people who in fact need the assistance by not accidentally excluding them from the assistance. \n\n\n Case Study (You may be concerned about the following questions): \n\t (a) Among people with need, what are your chances you don’t receive assistance given your race? \n\t (b) Among the people who need housing assistance, what are the chances they are predicted as not needing it? \n\t (c) Among the people who are qualified for the job, what are the chances they are predicted as not qualified? "}]}
                        ]},
                     {"name":"Among which group are you most concerned with ensuring predictive equity?",
                      "rule": "No", 
                      "node_explanation": "If the intervention is punitive, the harms of incorrectly selecting someone for the intervention will outweigh the harms of incorrectly missing them. \n\n In this case, we want to mainly reduce false positive errors  – wrongfully selecting someone for interventions when the interventions are in fact not appropriate for them. An example for this is when making bailing decisions, a false positive error would be determining that they are a flight risk and denying them bail when they are actually not a flight risk and should be granted bail. \n\n All the following metrics focus on reducing disparities in false positive errors – people for whom the intervention is not appropriate but are selected by the risk assessment as needing interventions -  across different groups. However, being fair in this process can happen in a few different ways depending on your policy objectives. Determining what is fair for a specific group requires understanding of the historical conditions and underlying causes of the disparity. ", 
                        "left_link_explanation":"Here, we are concerned with statements like “twice as many people from Group A were wrongly convicted as from Group B.” However, a statement like this is only problematic if the two groups are of roughly the same size which is often not the case.",
                        "middle_link_explanation": "Here, we are concerned with statements like “90% of people from Group A were wrongly convicted compared to only 10% of people from Group B.”", 
                        "middle_right_link_explanation": "Here, you are concerned with statements like “90% of group A who are selected to be denied bail are actually innocent, compared to 10% in group B.”",
                        "right_link_explanation": "Here you are concerned about statements like “90% of people who are innocent in group A are denied bail compared to 10% in group B.”  Here you ask the question: among the people who are innocent, what’s the chance they are denied bail?", 
                      "children": [ 
                        {"name": "False Positive Count Disparity #FP", "rule":"the counts of false positive errors across groups", 
                        "node_explanation":"While we don’t believe that there are a significant number of real-world cases where this property may be desired, we include it here for the sake of completeness."},
                        {"name": "False Positive Proportion Parity FP/N", "rule":"the proportion of people from the group(s) that are false positives", 
                        "node_explanation": "The metric we use here is False Positive Proportion. By choosing this metric, you want to ensure that for everyone, their chances of being wrongfully selected for intervention when in fact they do not need it, is the same across all groups. For example, you could have 1% of the people from each group be false positives, resulting in 10 people for a group that’s 100k and 100 people for a group that has a 1M population.\n\n Case Study: \n\t After stopping a driver, officers may carry out a search of the driver or vehicle if they suspect more serious criminal activity. A recent study found that, among stopped drivers, we found that black and Hispanic individuals were, on average, searched more often than white individuals (this corresponds to demographic parity on the left side of the fairness tree). \n\t The outcome test, however, is based not on the search rate but on the ‘hit rate’: the proportion of searches that successfully turn up contraband. The study found that contraband was found in 32% of searches of white drivers compared to 24.3% of searches of Hispanic drivers. A higher rate of Hispanic drivers who were searched turned out to be not in possession of contraband, violating the false positive proportion disparity."},
                        {"name": "False Discovery Parity  FP/(FP + TP)", "rule":"the proportion of people who are selected for the intervention and who are false positives", 
                        "node_explanation": "The metrics we use here is FDR parity. By ensuring that the chance of people being falsely predicted to be at risk is the same for the ones who will receive the intervention based on high risk predictions, we ensure that the tool is not subjecting a group to receive the punitive intervention at a higher rate, especially for the ones who are most likely to receive the intervention. \n\n Case Study: \n\t For example, if we are making bail decisions, 100 people may be denied bail, 60 of them white, and 40 non-white. If 10 out of the 60 white (17%)  are not a flight risk but still denied bail versus 20 of the 40 non-white defendants (50%) are wrongly denied bail, False Discovery Rate Disparity metric would consider that unfair. In general, among the people who are denied bail, this metric will focus on the innocence rate across groups. \n\t Similarly, in the child welfare contexts, we want to focus on: what are the chances the families do not have child maltreatment issues, among the families who are selected for further investigation by child welfare caseworkers?"},
                        {"name": "False Positive Rate FP/(FP + TN)", "rule":"the proportion of people who are not appropriate for the intervention but who may be false positive", 
                        "node_explanation":"The metrics we use here is False Positive Rate parity. This means that for people who are in fact not at risk, the chances of them being falsely predicted to be at risk is the same rate across the groups. This measure focuses on people who in fact should not receive the intervention. We ensure that the tool is not subjecting a group to receive the punitive intervention at a higher rate, especially for the ones who in fact do not need it. \n\n You want to ensure the model’s predictions guarantees a certain level of protection for people who in fact do not need the intervention by not accidentally assigning them to intervention. \n\n Case Study: \n\t For example, if we are making bail decisions, 100 people are innocent, 50 of them white, and 50 non-white. If 10 out of the 50 white (20%)  are not a flight risk but still denied bail versus 25 of the 50 non-white defendants (50%) are wrongly denied bail, False Positive Rate Disparity metric would consider that unfair."}]
                    }
                     ]
                },
                {
                     "name": "counterfactual fairness", "rule": "No", 
                     "node_explanation": "No data is perfect. Many data we collect in reality reflect to some degree the problems we mentioned above. If you answered YES to any of the questions above, the first thing to do is to try to understand who are the groups that are systematically missing from your data when they should have been included. Secondly, you want to understand who has more chances of being labeled in your data and why you do not observe outcomes for certain groups. Thirdly, you would want to enrich or correct your dataset by finding ways to collect missing labels or correct wrong labels. \n\n However, in doing so, you should be mindful of any potential ethical challenges this may pose. For example, in the child welfare case, it may be impossible to randomly inspect families of higher incomes for child maltreatment if the burden is unjustified. In the pretrial release case, it may be equally challenging to randomly release some people who are deemed as high risk just to observe whether they re-offend or not show up for trials later. On the other hand, it is possible to rectify some of the wrong labels. For example, increased training may aid medical professionals in reviewing and correcting some of the past misdiagnosed cases in skin cancer for Black patients. \n\n After you have considered and taken steps to assess the severity of the problems and address them, if you believe the missing/wrong labels in the data are so prevalent that your model will inevitably embody the existing biases, you may consider using counterfactual fairness. However, if you believe that you can effectively mitigate some of the problems so that your model can be useful with the correct understanding of its limitations, you can proceed. \n\n Essentially, counterfactual fairness compares the outcome you observe for an individual belonging to a group with the outcome you would have observed had the individual belonged to another group, where the grouping is based on protected attributes. There are many technical solutions to properly construct what the counterfactual “what-if” world would look like. However, each case is different and requires tailored solutions. We do not fully expand what they may be in this guide, but provide a list of resources below for you to discuss with your technical consultants and experts: Path-specific Decompose the counterfactual components"
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
            .on("click", click_nodetext)
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
    //if len(d.source.children)
    console.log((d.source.children.length));

    if ((d.source.children.length) == 2) {

        if (d.target.id % 2) {
            update_txt = d.source.right_link_explanation;
        } else {
            update_txt = d.source.left_link_explanation;
        }
    } else if ((d.source.children.length) == 3) {
        console.log(d.target.id % 3);
        if (d.target.id % 3 == 0) {
            update_txt = d.source.left_link_explanation;
        } else if  (d.target.id % 3 == 1) {
            update_txt = d.source.right_link_explanation;
        } else{
            update_txt = d.source.middle_link_explanation;
        }
    } else if ((d.source.children.length) == 4) {
       console.log(d.target.id % 4);
        if (d.target.id % 4 == 0) {
            update_txt = d.source.right_link_explanation;
        } else if  (d.target.id % 4 == 1) {
            update_txt = d.source.left_link_explanation;
        } else if (d.target.id % 4 == 3){
           update_txt = d.source.middle_right_link_explanation;
        } else{
          update_txt = d.source.middle_link_explanation;
        }
    }
    d3.select("#explanation")
        .text(update_txt);
}

// update explanation on click.
function click_nodetext(d) {
    update_txt = d.node_explanation;
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
