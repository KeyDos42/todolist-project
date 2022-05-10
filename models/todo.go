package models

type Todo struct {
	Id        int
	Item      string
	Completed int
	Progress  int
	Late      int
	TodoElem  int
}
