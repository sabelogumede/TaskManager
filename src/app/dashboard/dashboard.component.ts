import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string ="";
  Username: string ="";
  NoOfTeamMembers: number =0;
  TotalCostOfAllProjects: number =0;
  PendingTasks: number =0;
  UpComingProjects: number =0;
  ProjectCost: number =0;
  CurrentExpenditure: number =0;
  AvailableFunds: number =0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any =[];
  TeamMembers: any = [];

  ngOnInit() {
    this.Designation= "Team Leader";
    this.Username = "Sabelo Gumede";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = [
      "ABC Infotech Ltd.", "DEF Software Solutions.", "GHI Industries."
    ]
    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ]

    for(var i = 2019; i>= 2010; i--){
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
      { Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8},
      { Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1},
      { Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6},
    ]

    this.TeamMembers = [
      {
        Region:"East", Members: [
          {ID: 1, Name: "Sabelo", Status: "Available"},
          {ID: 1, Name: "Gogo", Status: "Available"},
          {ID: 1, Name: "Sipho", Status: "Busy"},
          {ID: 1, Name: "Thabile", Status: "Busy"}
        ]
      },
      {
        Region:"West", Members: [
          {ID: 1, Name: "Jabu", Status: "Available"},
          {ID: 1, Name: "Thami", Status: "Busy"},
          {ID: 1, Name: "Vincent", Status: "Available"},
          {ID: 1, Name: "Mala", Status: "Busy"}
        ]
      },
      {
        Region:"South", Members: [

          {ID: 1, Name: "Nhlanhla", Status: "Busy"},
          {ID: 1, Name: "Sphelele", Status: "Available"},
          {ID: 1, Name: "Busi", Status: "Busy"},
          {ID: 1, Name: "Sizwe", Status: "Available"}
        ]
      },
      {
        Region:"North", Members: [
          {ID: 1, Name: "Nomsa", Status: "Busy"},
          {ID: 1, Name: "Sphiwe", Status: "Busy"},
          {ID: 1, Name: "Hlelo", Status: "Available"},
          {ID: 1, Name: "Vusi", Status: "Available"}
        ]
      }
    ]

  }

  onProjectChange($event: any)
    {
      if($event.target.innerHTML == "Project A")
      {
        this.ProjectCost = 2113507;
        this.CurrentExpenditure = 96788;
        this.AvailableFunds = 52436;
      }
      else if($event.target.innerHTML == "Project B")
      {
        this.ProjectCost = 88923;
        this.CurrentExpenditure = 22450;
        this.AvailableFunds = 2640;
      }
      else if($event.target.innerHTML == "Project C")
      {
        this.ProjectCost = 662183;
        this.CurrentExpenditure = 7721;
        this.AvailableFunds = 9811;
      }
      else if($event.target.innerHTML == "Project D")
      {
        this.ProjectCost = 928431;
        this.CurrentExpenditure = 562;
        this.AvailableFunds = 883;
      }
    }

}
